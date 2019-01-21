import {Ajax}     from "../../../services/ajax";
import UtilsArray from "../../../Utils/UtilsArray";

export class GeneralModel extends Ajax {
	url                = 'http://alinazero/alinaRestAccept';
	tableName          = '';
	attributes         = {};
	lastJsonedResponse = {};
	arrFieldsOrder     = [];

	constructor(attributes = {}, options = {}) {
		super(options);
		this.attributes = attributes;
		this.options.tableName && (this.tableName = this.options.tableName);
		this.getParams.cmd = 'modelOne';
		this.getParams.m   = this.tableName;
	};

	//region Ajax
	ajaxGet() {
		return super
			.ajaxGet()
			.then(r => {
				return r.json();
			})
			.then(r => {
				this.lastJsonedResponse = r;
				this.setAttributes(this.lastJsonedResponse.data);
				return r;
			})
	};

	//endregion Ajax

	//region Helpers
	setAttributes(attributes = {}) {
		this.attributes = attributes;
		this.arrFieldsOrderSet();
		return this;
	}

	//region arrFieldsOrder Manipulations
	arrFieldsOrderSet() {
		this.arrFieldsOrder = Object.keys(this.attributes);
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

export class GeneralCollection {

}
