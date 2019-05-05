import {Ajax}        from "./ajax";
import UtilsArray    from "../Utils/UtilsArray";
import UtilsData     from "../Utils/UtilsData";
import StorageStates from "../components/TableComponent/DataProviders/StorageStates";
import UtilsObject   from "../Utils/UtilsObject";

export class GeneralModel extends Ajax {
	dataType           = 'model';
	url                = 'http://alinazero:8080/alinaRestAccept';
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

	setGetParams(gpNewest = {}) {
		const gpFromStorage = StorageStates.gOrEmptyObject(this.curDataKey(), 'getParams');
		const gpOnInit      = this.getParams;

		this.getParams = Object.assign(
			gpOnInit,
			gpFromStorage,
			gpNewest
		);

		//ToDo: Not the best approach.
		this.getParams.cmd = this.dataType;
		this.getParams.m   = this.tableName;

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

export class GeneralCollection extends GeneralModel {
	dataType        = 'collection';
	flagSignal      = true;
	models          = [];
	mClassName      = GeneralModel;
	isSubCollection = false;

	/**region Pager */
	pageCurrentNumber = 1;
	pageSize          = 2;
	rowsTotal         = 0;

	/**endregion Pager */

	/**region Sort*/
	sortName = [];
	sortAsc  = [];

	/**endregion Sort*/

	static newInst(models = [], options = {}) {
		const _this = new this();
		_this.setOptions(options);
		_this.setModels(models);
		_this.pagerFromPropsToGet({});
		_this.sortFromPropsToGet();
		_this.setGetParams();
		_this.pagerFromGetToProps({});
		_this.sortFromGetToProps({});

		return _this;
	}

	//region Ajax
	ajaxGetAfterSuccess(aPromise) {
		this.flagSignal         = !this.flagSignal;
		this.lastJsonedResponse = aPromise;
		this.setModels(this.lastJsonedResponse.data);
		this.pagerFromMeta(this.lastJsonedResponse.meta);

		if (this.hookAjaxGetAfterSuccess) {
			return this.hookAjaxGetAfterSuccess(aPromise);
		}
		return aPromise;
	}

	setModels(models = []) {

		if (!models.forEach) {
			console.log("models ++++++++++");
			console.log(typeof models);
			console.log(models);
			return;
		}

		this.models     = [];
		const arrFields = (UtilsData.empty(models[0]))
		                  ? []
		                  : Object.keys(models[0]);
		this.arrFieldsOrderSet(arrFields);
		models.forEach((e, i) => {
			const m = this.mClassName.newInst(e, {tableName: this.tableName});
			//m.arrFieldsOrder = this.arrFieldsOrder;
			m.arrFieldsOrderSet(this.arrFieldsOrder, true);
			this.models[i] = m;
		});
		return this;
	}

	//region Pager

	pagerFromPropsToGet() {
		this.getParams.p  = this.pageCurrentNumber;
		this.getParams.ps = this.pageSize;
	}

	pagerFromGetToProps() {
		this.pageCurrentNumber = this.getParams.p || this.pageCurrentNumber;
		this.pageSize          = this.getParams.ps || this.pageSize;
	}

	pagerFromMeta(meta = {}) {
		this.pageCurrentNumber = meta.pageCurrentNumber;
		this.pageSize          = meta.pageSize;
		this.rowsTotal         = meta.rowsTotal;
		this.pagerFromPropsToGet();
	}

	//endregion Pager

	//region Sort
	sortFromPropsToGet() {
		this.getParams.sn = this.sortName.toString();
		this.getParams.sa = this.sortAsc.toString();
	}

	sortFromGetToProps() {
		if (!UtilsData.empty(this.getParams.sn)) {
			this.sortName = this.getParams.sn.split(',');
		}
		if (!UtilsData.empty(this.getParams.sa)) {
			this.sortAsc = this.getParams.sa.split(',');
		}

		return this;
	}

	setSortProps(field, level = 0) {
		const sn = this.sortName;
		const sa = this.sortAsc;
		if (sn[level] === field) {
			sa[level] = !sa[level];
		} else {
			sn[level] = field;
			sa[level] = true;
		}
		//this.flagSignal = !this.flagSignal;
		return this;
	}

	isSortedBy(field) {
		const sn      = this.sortName;
		const sa      = this.sortAsc;
		const level   = sn.indexOf(field);
		let direction = 'none';
		if (level > -1) {
			switch (sa[level]) {
				case true:
				case 1:
				case "1":
				case "true":
					direction = `ASC_${level}`;
					break;
				case false:
				case 0:
				case "0":
				case "false":
					direction = `DESC_${level}`;
					break;
			}
		}

		return direction;
	}

//endregion Sort
//endregion Ajax
}