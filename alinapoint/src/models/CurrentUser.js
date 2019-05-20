import {GeneralModel} from "../services/GeneralModel";
import UtilsData      from "../Utils/UtilsData";
import StorageStates  from "../services/StorageStates";

export default class CurrentUser extends GeneralModel {

	static inst       = null;
	static storageKey = 'CurrentUser';

	static newInst(attributes = {}, options = {}) {
		if (UtilsData.empty(this.inst)) {
			return super.newInst(attributes, options);
		} else {
			let cu = StorageStates.gOrEmptyObject(this.storageKey);
			return this.inst;
		}
	}
}
