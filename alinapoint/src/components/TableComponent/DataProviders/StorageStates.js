import UtilsObject from "../../../Utils/UtilsObject";

const StorageStates = {
	racks: {},

	s(modelName, path = '', value) {
		return UtilsObject.setByPath(this.racks, `${modelName}.${path}`, value);
	},

	g(modelName, path = '') {
		return UtilsObject.getByPath(this.racks, `${modelName}.${path}`);
	},

	log() {
		console.log("StorageStates racks ++++++++++");
		console.log(this.racks);
	}
};

export default StorageStates;
