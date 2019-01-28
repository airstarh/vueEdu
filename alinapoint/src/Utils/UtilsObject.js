import UtilsData from "./UtilsData";

export default class UtilsObject {

	//region Get Set by path.
	/**
	 * @link https://stackoverflow.com/a/20240290/3142281
	 * */
	static getByPath(o, path = '') {
		const pathArr = path.split('.');
		const len     = pathArr.length - 1;
		let ref       = o;
		for (let i = 0; i <= len; i++) {
			let prop = pathArr[i];
			if (typeof ref[prop] !== 'undefined') {
				ref = ref[prop];
			} else {
				return undefined;
			}
		}
		return ref;
	};

	static setByPath(o, path = '', value) {
		const pathArr = path.split('.');
		const len     = pathArr.length - 1;
		let ref       = o;
		for (let i = 0; i < len; i++) {
			let prop = pathArr[i];
			if (prop in ref) {
				ref = ref[prop];
			} else {
				ref[prop] = {};
				ref       = ref[prop];
			}
		}
		ref[pathArr[len]] = value;
		return value;
	};

	static setByPathArray(o, pathArr = [], value) {
		const len = pathArr.length - 1;
		let ref   = o;
		for (let i = 0; i < len; i++) {
			let prop = pathArr[i];
			if (prop in ref) {
				ref = ref[prop];
			} else {
				ref[prop] = {};
				ref       = ref[prop];
			}
		}
		ref[pathArr[len]] = value;
		return value;
	};

	//endregion Get Set by path.

	static eraseEmpty(o) {
		for (let p in o) {
			if (o[p] === '' || o[p] === null) {
				delete o[p];
			}
		}
	}
}
