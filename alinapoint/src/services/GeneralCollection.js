import UtilsData      from "../Utils/UtilsData";
import {GeneralModel} from "./GeneralModel";

/**
 * @class GeneralCollection
 * @extends GeneralModel
 **/
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

	//endregion Sort

	/**
	 * @return GeneralCollection instance
	 **/
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
