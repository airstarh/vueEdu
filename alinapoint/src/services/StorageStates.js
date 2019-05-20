import UtilsObject from "../Utils/UtilsObject";
import UtilsData   from "../Utils/UtilsData";

const StorageStates = {
	//region Core
	racks: {},
	isLsActivated: true,

	s(modelName, path = '', value) {
		if (this.isLsActivated) {
			this.lsSet(modelName, path, value)
		}
		const fullPath = this.buildPath(modelName, path);
		return UtilsObject.setByPath(this.racks, fullPath, value);
	},

	g(modelName, path = '') {
		if (this.isLsActivated) {
			return this.lsGet(modelName, path)
		}
		const fullPath = this.buildPath(modelName, path);
		return UtilsObject.getByPath(this.racks, fullPath);
	},
	//endregion Core

	//region Additions
	setIfEmpty(modelName, path = '', value) {
		let curVal = this.g(modelName, path);
		if (UtilsData.empty(curVal)) {
			return this.s(modelName, path, value);
		}
		return curVal;
	},

	gOrEmptyObject(modelName, path = ''){
		return this.g(modelName, path) || {};
	},

	//region localstorage
	lsSet(modelName, path = '', value){
		const fullPath = this.buildPath(modelName, path);
		localStorage.setItem(fullPath, JSON.stringify(value));
		return true;
	},
	lsGet(modelName, path = ''){
		const fullPath = this.buildPath(modelName, path);
		return JSON.parse(localStorage.getItem(fullPath));
	},
	//endregion localstorage
	//endregion Additions

	//region Helpers
	log() {
		console.log("StorageStates racks ++++++++++");
		console.log(this.racks);
	},

	buildPath(baseKey, path = ''){
		if (UtilsData.empty(path)) {
			return baseKey;
		}
		return `${baseKey}.${path}`;
	}
	//endregion Helpers
};

export default StorageStates;
