const ConfigApi = {
	url:         '',
	urlProtocol: 'http://',
	urlDomain:   'alinazero',
	urlPort:     ':8080',
	urlPath:     '/alinaRestAccept',
	headers:     {
		"Content-Type": "application/json; charset=utf-8",
		// "Content-Type": "application/x-www-form-urlencoded",
	},
	getParams:   {},
	postParams:  {},
	mode:        "cors", // no-cors, cors, *same-origin
	cache:       "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
	credentials: "omit", //"same-origin"; // include, same-origin, *omit
	redirect:    "follow", // manual, *follow, error
	referrer:    "no-referrer", // no-referrer, *client
};
export default ConfigApi;
