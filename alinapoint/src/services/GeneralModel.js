import {Ajax}        from "./Ajax";
import UtilsArray    from "../Utils/UtilsArray";
import UtilsData     from "../Utils/UtilsData";
import StorageStates from "./StorageStates";
import UtilsObject   from "../Utils/UtilsObject";

/**
 * @class GeneralModel
 * @extends Ajax
 **/
export class GeneralModel extends Ajax {
	dataType           = 'model';
	tableName          = 'XXX';
	id                 = null;
	pkName             = 'id';
	attributes         = {};
	lastJsonedResponse = {};
	arrFieldsOrder     = [];

	/**
	 * @return GeneralModel instance
	 */
	static newInst(attributes = {}, options = {}) {
		const _this = new this();
		_this.setOptions(options);
		_this.setAttributes(attributes);
		_this.setGetParams({});

		return _this;
	}

	setGetParams(gpNewest = {}) {
		const gpFromStorage = StorageStates.gOrEmptyObject(this.curDataKey(), 'getParams');
		const gpOnInit      = this.getParams;

		this.getParams = Object.assign(
			gpOnInit,
			gpFromStorage,
			gpNewest
		);
		this.saveGetParams();
		return this;
	}

	//region Ajax
	ajaxGet() {
		if (this.hookBeforeAjaxGet) {
			this.hookBeforeAjaxGet();
		}
		this.saveGetParams({});
		return super
			.ajaxGet()
			.then(r => {
				return r.json();
			})
			.then(r => {
				return this.ajaxGetAfterSuccess(r);
			})
	}

	saveGetParams() {
		UtilsObject.eraseEmpty(this.getParams);
		StorageStates.s(this.curDataKey(), 'getParams', this.getParams);
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
		//this.flagSignal = !this.flagSignal;
		return this;
	}

	arrFieldsOrderSetLater(i) {
		UtilsArray.elSetLater(this.arrFieldsOrder, i);
		//this.flagSignal = !this.flagSignal;
		return this;
	}

	//endregion arrFieldsOrder Manipulations

	//endregion Helpers
}
