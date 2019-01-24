import {Ajax}        from "../../../services/ajax";
import UtilsArray    from "../../../Utils/UtilsArray";
import UtilsData     from "../../../Utils/UtilsData";
import StorageStates from "./StorageStates";

//import * as UD       from "../../../Utils/UtilsData";

export class GeneralModel extends Ajax {
	url                = 'http://alinazero/alinaRestAccept';
	tableName          = 'XXX';
	attributes         = {};
	lastJsonedResponse = {};
	arrFieldsOrder     = [];

	constructor(attributes = {}, options = {}) {
		super(options);
		this.setAttributes(attributes);
		this.options.tableName && (this.tableName = this.options.tableName);
		this.getParams.cmd = 'model';
		this.getParams.m = this.tableName;
	};

	//region Ajax
	ajaxGet() {
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
		return this;
	}

	//region arrFieldsOrder Manipulations
	arrFieldsOrderSet(o = {}) {
		const a             = StorageStates.g(this.tableName, 'arrFieldsOrder');
		this.arrFieldsOrder = (UtilsData.empty(a))
		                      ? Object.keys(o)
		                      : a;
		StorageStates.s(this.tableName, 'arrFieldsOrder', this.arrFieldsOrder);
		return this;
	}

	arrFieldsOrderSetEarlier(i) {
		new UtilsArray(this.arrFieldsOrder).elSetEarlier(i);
		return this;
	}

	arrFieldsOrderSetLater(i) {
		new UtilsArray(this.arrFieldsOrder).elSetLater(i);
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
		this.models = this.setModels(models);
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
			const m        = new this.mClassName(e, {
				tableName: this.tableName
			});
			m.arrFieldsOrder = this.arrFieldsOrder;
			this.models[i] = m;
		});
		return this;
	}

	//endregion Ajax
}
