import {Ajax} from "../../../services/ajax";

export class GeneralModel {
	options            = {};
	baseUrl            = 'http://alinazero/alinaRestAccept';
	attributes         = {};
	tableName          = '';
	lastJsonedResponse = {};
	getParams          = {};
	headers            = {};
	postParams         = {};

	constructor(attributes = {}, options = {}) {
		this.attributes = attributes;
		this.options    = options;
		this.options.baseUrl && (this.baseUrl = this.options.baseUrl);
		this.options.tableName && (this.tableName = this.options.tableName);
		this.getParams = {
			cmd: 'modelOne',
			m:   this.tableName,
		};
		options.getParams && Object.assign(this.getParams, options.getParams);
		options.postParams && Object.assign(this.postParams, options.postParams);
		options.headers && Object.assign(this.headers, options.headers);
	};

	//region Helpers
	//endregion Helpers

	//region Ajax
	ajaxGet() {
		return new Ajax({
			url:       this.baseUrl,
			getParams: this.getParams,
			headers:   this.headers,
		})
			.get()
			.then(r => {
				return r.json();
			})
			.then(r=>{
				this.lastJsonedResponse = r;
				this.attributes = this.lastJsonedResponse.data;
				return r;
			})
			;
	};

	ajaxPost() {};

	ajaxPut() {};

	ajaxDelete() {};

	//endregion Ajax
}

export class GeneralCollection {

}
