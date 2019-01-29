import {Ajax}        from "../../../services/ajax";
import UtilsArray    from "../../../Utils/UtilsArray";
import UtilsData     from "../../../Utils/UtilsData";
import StorageStates from "./StorageStates";
import UtilsObject   from "../../../Utils/UtilsObject";

export class GeneralModel extends Ajax {
	dataType           = 'model';
	url                = 'http://alinazero/alinaRestAccept';
	tableName          = 'XXX';
	id                 = null;
	pkName             = 'id';
	attributes         = {};
	lastJsonedResponse = {};
	arrFieldsOrder     = [];

	static newInst(attributes = {}, options = {}) {
		const _this = new this();
		_this.setOptions(options);
		_this.setAttributes(attributes);
		_this.setGetParams({});

		return _this;
	}

	setGetParams(newObj = {}) {
		const prevGetParams = StorageStates.gOrEmptyObject(this.curDataKey(), 'getParams');
		this.getParams      = Object.assign(prevGetParams, this.getParams, newObj);

		//ToDo: Not the best approach.
		this.getParams.cmd = this.dataType;
		this.getParams.m   = this.tableName;

		return this;
	}

	//region Ajax
	ajaxGet() {
		if (this.hookBeforeAjaxGet) {
			this.hookBeforeAjaxGet();
		}
		UtilsObject.eraseEmpty(this.getParams);
		StorageStates.s(this.curDataKey(), 'getParams', this.getParams);
		return super
			.ajaxGet()
			.then(r => {
				return r.json();
			})
			.then(r => {
				return this.ajaxGetAfterSuccess(r);
			})
	}

	ajaxGetAfterSuccess(aPromise) {
		this.lastJsonedResponse = aPromise;
		this.setAttributes(this.lastJsonedResponse.data);
		if (this.hookAjaxGetAfterSuccess) {
			return this.hookAjaxGetAfterSuccess(aPromise);
		}
		return aPromise;
	}

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
	}

	//endregion Ajax

	//region Helpers
	setAttributes(attributes = {}) {
		this.attributes = attributes;
		this.arrFieldsOrderSet(Object.keys(this.attributes));
		if (attributes[this.pkName]) {
			this.id = attributes[this.pkName];
		}
		return this;
	}

	isNew() {
		return UtilsData.empty(this.id);
	}

	curDataKey() {return `${this.dataType}.${this.tableName}`;}

	//region arrFieldsOrder Manipulations
	arrFieldsOrderSet(arr = [], force = false) {
		if (UtilsData.empty(arr)) {
			return this;
		}

		if (force) {
			this.arrFieldsOrder = StorageStates.s(this.curDataKey(), 'arrFieldsOrder', arr);
			return this;
		}

		this.arrFieldsOrder = StorageStates.setIfEmpty(this.curDataKey(), 'arrFieldsOrder', arr);
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
	dataType   = 'collection';
	flagSignal = true;
	models     = [];
	mClassName = GeneralModel;

	/**region Pager */
	pageCurrentNumber = 1;
	pageSize          = 2;
	rowsTotal         = 0;

	/**endregion Pager */

	static newInst(models = [], options = {}) {
		const _this = new this();
		_this.setOptions(options);
		_this.setModels(models);
		_this.setGetParams({});

		return _this;
	}

	//region Ajax
	hookBeforeAjaxGet() {
		this.translatePageParamsToGetParams();
		return this;
	}

	translatePageParamsToGetParams() {
		//ToDo: Better translate to pn or pcn instead p.
		this.getParams.p  = this.pageCurrentNumber;
		this.getParams.ps = this.pageSize;
		return this;
	}

	ajaxGetAfterSuccess(aPromise) {
		this.flagSignal         = !this.flagSignal;
		this.lastJsonedResponse = aPromise;
		this.setModels(this.lastJsonedResponse.data);
		this.setPageInfo(this.lastJsonedResponse.meta);
		if (this.hookAjaxGetAfterSuccess) {
			return this.hookAjaxGetAfterSuccess(aPromise);
		}
		return aPromise;
	}

	setModels(models = []) {
		this.models     = [];
		const arrFields = (UtilsData.empty(models[0]))
		                  ? []
		                  : Object.keys(models[0]);
		this.arrFieldsOrderSet(arrFields);
		models.forEach((e, i) => {
			const m          = this.mClassName.newInst(e, {tableName: this.tableName});
			//m.arrFieldsOrder = this.arrFieldsOrder;
			m.arrFieldsOrderSet(this.arrFieldsOrder, true);
			this.models[i]   = m;
		});
		return this;
	}

	setPageInfo(meta) {
		UtilsData.isset(meta.pageCurrentNumber)
		&& (this.pageCurrentNumber = parseInt(meta.pageCurrentNumber));
		UtilsData.isset(meta.pageSize)
		&& (this.pageSize = parseInt(meta.pageSize));
		UtilsData.isset(meta.rowsTotal)
		&& (this.rowsTotal = parseInt(meta.rowsTotal));

		return this;
	}

	//endregion Ajax
}
