import UtilsObject from "../../../Utils/UtilsObject";
import UtilsData   from "../../../Utils/UtilsData";

const StorageStates = {
	racks: {},

	s(modelName, path = '', value) {
		return UtilsObject.setByPath(this.racks, `${modelName}.${path}`, value);
	},

	g(modelName, path = '') {
		return UtilsObject.getByPath(this.racks, `${modelName}.${path}`);
	},

	setIfEmpty(modelName, path = '', value) {
		let curVal = this.g(modelName, path);
		if (UtilsData.empty(curVal)) {
			return this.s(modelName, path, value);
		}
		return curVal;
	},

	log() {
		console.log("StorageStates racks ++++++++++");
		console.log(this.racks);
	}
};

export default StorageStates;
