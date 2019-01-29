export default class UtilsArray {

	//region Elements Manipulations
	static elsSwap(arr, i1, i2) {

		/**Wrong approach. See below. */
		// let valTemp  = arr[i2];
		// arr[i2]   = arr[i1];
		// arr[i1]   = valTemp;

		/**
		 * In order to make framework react on Array changes,
		 * it is used more complicated way to change order of properties.
		 * @see https://vuejs.org/v2/guide/list.html#Caveats
		 */
		arr[i1] = arr.splice(i2, 1, arr[i1])[0];
		return arr;
	}

	static elSetEarlier(arr, i) {
		if (UtilsArray.isFirst(arr, i)) {
			return arr;
		}
		UtilsArray.elsSwap(arr, i, i - 1);
		return arr;
	}

	static elSetLater(arr, i) {
		if (UtilsArray.isLast(arr, i)) {
			return arr;
		}
		UtilsArray.elsSwap(arr, i, i + 1);
		return arr;
	}

	//endregion Elements Manipulations

	//region Helpers
	static isFirst(arr, i) {
		return i === 0;
	}

	static isLast(arr, i) {
		return arr.length-1 === i;
	}

	//endregion Helpers
}
