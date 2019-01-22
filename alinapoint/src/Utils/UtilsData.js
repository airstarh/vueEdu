export default class UtilsData{

	isset(ObjectPropertyOrArrayKey) {
		return typeof ObjectPropertyOrArrayKey !== "undefined" && ObjectPropertyOrArrayKey !== null;
	};

	empty(value) {
		return value == null
			|| value == undefined
			|| value === 0
			|| value === ''
			|| value === '0'
			|| JSON.stringify(value) === JSON.stringify({})
			|| JSON.stringify(value) === JSON.stringify([])
			;
	};


}
