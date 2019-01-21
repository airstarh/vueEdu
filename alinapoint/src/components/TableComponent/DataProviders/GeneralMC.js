import {Ajax} from "../../../services/ajax";

export class GeneralModel extends Ajax {
	url                = 'http://alinazero/alinaRestAccept';
	attributes         = {};
	tableName          = '';
	lastJsonedResponse = {};

	constructor(attributes = {}, options = {}) {
		super(options);
		console.log("this.options ++++++++++");
		console.log(this.options);
		this.attributes = attributes;
		this.options.tableName && (this.tableName = this.options.tableName);
		this.getParams.cmd = 'modelOne';
		this.getParams.m   = this.tableName;
	};

	//region Helpers
	//endregion Helpers

	//region Ajax
	ajaxGet() {
		return super
			.ajaxGet()
			.then(r => {
				return r.json();
			})
			.then(r => {
				this.lastJsonedResponse = r;
				this.attributes         = this.lastJsonedResponse.data;
				return r;
			})
	};
	//endregion Ajax
}

export class GeneralCollection {

}
