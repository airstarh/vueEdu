export default class UtilsData {

	static isset(ObjectPropertyOrArrayKey) {
		return typeof ObjectPropertyOrArrayKey !== "undefined" && ObjectPropertyOrArrayKey !== null;
	}

	static empty(value) {
		return value == null
			|| value == undefined
			|| value === 0
			|| value === ''
			//|| value === '0' //ToDo: Doubtful.
			|| JSON.stringify(value) === JSON.stringify({})
			|| JSON.stringify(value) === JSON.stringify([])
			;
	}

	static isArray(something) {
		//ToDo: Look here later: https://juhukinners.wordpress.com/2009/01/11/typeof-considered-useless-or-how-to-write-robust-type-checks/
		// return UtilsData.isset(something.length)
		// 	&& typeof something !== 'string'
		// 	;

		// https://stackoverflow.com/a/12469043/3142281
		return something !== null
			&& typeof something === "object"
			&& typeof something.length !== "undefined"
			//&& something.__proto__ === Array.prototype
			;
	}
}
