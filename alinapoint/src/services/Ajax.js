import UtilsData from "../Utils/UtilsData";
import ConfigApi from "../configs/ConfigApi";

export class Ajax {
	options     = {};
	//url         = 'http://alinazero/alinaRestAccept?cmd=model&m=user&ps=2&p=1';
	url         = '';
	urlProtocol = ''; //http://';
	urlDomain   = ''; //'alinazero';
	urlPort     = ''; //':8080';
	urlPath     = ''; //'/alinaRestAccept';
	headers     = {};
		// {
		// "Content-Type": "application/json; charset=utf-8",
		// // "Content-Type": "application/x-www-form-urlencoded",
		// };
	getParams   = {};
	postParams  = {};
	mode        = ''; //"cors"; // no-cors, cors, *same-origin
	cache       = ''; //"no-cache"; // *default, no-cache, reload, force-cache, only-if-cached
	credentials = ''; //"omit"; //"same-origin"; // include, same-origin, *omit
	redirect    = ''; //"follow"; // manual, *follow, error
	referrer    = ''; //"no-referrer"; // no-referrer, *client

	constructor() {}

	/**
	 * @return Ajax instance
	 */
	static newInst(options = {}) {
		const _this = new this();
		_this.setOptions(options);
		return _this;
	}

	setOptions(options = {}) {
		//ToDo: Smart Extend of:
		//ToDO: ConfigApi.headers;
		//ToDO: ConfigApi.getParams;
		//ToDO: ConfigApi.postParams;
		options = Object.assign({}, ConfigApi, options);
		this.options = options;
		for (let p in options) {
			if (options.hasOwnProperty(p)) {
				this[p] = options[p];
			}
		}
		return this;
	}

	ajaxGet() {
		return fetch(this.urlBuild(), {
			method:      "GET", // *GET, POST, PUT, DELETE, etc.
			mode:        this.mode,
			cache:       this.cache,
			credentials: this.credentials,
			headers:     this.headers,
			redirect:    this.redirect,
			referrer:    this.referrer,
		})
			.then(response => {
				console.log(" ");
				console.log(">>>>>>>>> Ajax. GET. Raw Response");
				console.log(response);
				return response
			}) // parses response to JSON
			.catch(error => console.error('Error:', error));

	}

	ajaxPost() {
		return fetch(this.urlBuild(), {
			method:      "POST", // *GET, POST, PUT, DELETE, etc.
			mode:        this.mode,
			cache:       this.cache,
			credentials: this.credentials,
			headers:     this.headers,
			redirect:    this.redirect,
			referrer:    this.referrer,
			body:        JSON.stringify(this.postParams)
		})
			.then(response => {
				console.log(" ");
				console.log(">>>>>>>>> Ajax. POST. Raw Response");
				console.log(response);
				return response
			}) // parses response to JSON
			.catch(error => console.error('Error:', error));
	}

	ajaxPut() {
		return fetch(this.urlBuild(), {
			method:      "PUT", // *GET, POST, PUT, DELETE, etc.
			mode:        this.mode,
			cache:       this.cache,
			credentials: this.credentials,
			headers:     this.headers,
			redirect:    this.redirect,
			referrer:    this.referrer,
			body:        JSON.stringify(this.postParams)
		})
			.then(response => {
				console.log(" ");
				console.log(">>>>>>>>> Ajax. PUT. Raw Response");
				console.log(response);
				return response
			}) // parses response to JSON
			.catch(error => console.error('Error:', error));

	}

	ajaxDelete() {
	}

	//region Data Processing
	/**
	 * @return String
	 */
	urlBuild() {
		let urlFull = '';
		if (!UtilsData.empty(this.url)) {
			urlFull = this.url;
		} else {
			const urlProtocol = this.urlProtocol;
			const urlDomain   = this.urlDomain;
			const urlPort     = this.urlPort;
			const urlPath     = this.urlPath;
			urlFull           = `${urlProtocol}${urlDomain}${urlPort}${urlPath}`;
		}
		const url = new URL(urlFull);
		Object.keys(this.getParams).forEach(key => url.searchParams.append(key, this.getParams[key]));
		return url.toString();
	}

	//endregion Data Processing
}
