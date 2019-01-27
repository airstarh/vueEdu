import {Ajax}        from "../../../services/ajax";
import UtilsArray    from "../../../Utils/UtilsArray";
import UtilsData     from "../../../Utils/UtilsData";
import StorageStates from "./StorageStates";
import UtilsObject   from "../../../Utils/UtilsObject";

//import * as UD       from "../../../Utils/UtilsData";

export class GeneralModel extends Ajax {
	url                = 'http://alinazero/alinaRestAccept';
	tableName          = 'XXX';
	id                 = null;
	pkName             = 'id';
	attributes         = {};
	lastJsonedResponse = {};
	arrFieldsOrder     = [];

	constructor(attributes = {}, options = {}) {
		super(options);
		//First - Properties
		this.options.tableName && (this.tableName = this.options.tableName);
		this.options.pkName && (this.pkName = this.options.pkName);

		//Second - Functions
		this.setAttributes(attributes);

		//Third - details
		//ToDo: Not the best approach.
		this.getParams.cmd = 'model';
		this.getParams.m   = this.tableName;
		StorageStates.g(this.tableName, 'getParams') && Object.assign(StorageStates.g(this.tableName, 'getParams'), this.getParams);
	};

	//region Ajax
	ajaxGet() {
		UtilsObject.eraseEmpty(this.getParams);
		StorageStates.s(this.tableName, 'getParams', this.getParams);
		return super
			.ajaxGet()
			.then(r => {
				return r.json();
			})
			.then(r => {
				return this.ajaxGetAfterSuccess(r);
			})
	};

	ajaxPut() {
		this.postParams = this.attributes;
		return super
			.ajaxPut()
			.then(r => {
				return r.json();
			})
			.then(r => {
				return this.ajaxGetAfterSuccess(r);
			})
	};

	//endregion Ajax

	//region Helpers
	ajaxGetAfterSuccess(aPromise) {
		this.lastJsonedResponse = aPromise;
		this.setAttributes(this.lastJsonedResponse.data);
		if (this.hookAjaxGetAfterSuccess) {
			return this.hookAjaxGetAfterSuccess(aPromise);
		}
		return aPromise;
	}

	setAttributes(attributes = {}) {
		this.attributes = attributes;
		this.arrFieldsOrderSet(this.attributes);
		if (attributes[this.pkName]) {
			this.id = attributes[this.pkName];
		}
		return this;
	}

	isNew() {
		return UtilsData.empty(this.id);
	}

	//region arrFieldsOrder Manipulations
	arrFieldsOrderSet(o = {}) {
		if (UtilsData.empty(o)) {
			return this;
		}
		this.arrFieldsOrder = StorageStates.setIfEmpty(this.tableName, 'arrFieldsOrder', Object.keys(o));
		return this;
	}

	arrFieldsOrderSetEarlier(i) {
		UtilsArray.elSetEarlier(this.arrFieldsOrder, i);
		return this;
	}

	arrFieldsOrderSetLater(i) {
		UtilsArray.elSetLater(this.arrFieldsOrder, i);
		return this;
	}

	//endregion arrFieldsOrder Manipulations

	//endregion Helpers
}

export class GeneralCollection extends GeneralModel {

	models     = [];
	mClassName = GeneralModel;

	constructor(models = [], options = {}) {
		super({}, options);
		this.models        = this.setModels(models);
		this.getParams.cmd = 'collection';
	};

	//region Ajax
	ajaxGetAfterSuccess(aPromise) {
		this.lastJsonedResponse = aPromise;
		this.setModels(this.lastJsonedResponse.data);
		if (this.hookAjaxGetAfterSuccess) {
			return this.hookAjaxGetAfterSuccess(aPromise);
		}
		return aPromise;
	}

	setModels(models = []) {
		this.models = [];
		this.arrFieldsOrderSet(models[0] || []);
		models.forEach((e, i, arr) => {
			const m          = new this.mClassName(e, {
				tableName: this.tableName
			});
			m.arrFieldsOrder = this.arrFieldsOrder;
			this.models[i]   = m;
		});
		return this;
	}

	//endregion Ajax
}
