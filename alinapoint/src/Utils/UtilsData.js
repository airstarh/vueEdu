export default class UtilsData{

	static isset(ObjectPropertyOrArrayKey) {
		return typeof ObjectPropertyOrArrayKey !== "undefined" && ObjectPropertyOrArrayKey !== null;
	};

	static empty(value) {
		return value == null
			|| value == undefined
			|| value === 0
			|| value === ''
			|| value === '0' //ToDo: Doubtful.
			|| JSON.stringify(value) === JSON.stringify({})
			|| JSON.stringify(value) === JSON.stringify([])
			;
	};


}
