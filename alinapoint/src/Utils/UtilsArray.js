export default class UtilsArray {
	refArr = [];

	constructor(refArr) {
		this.refArr = refArr;
	}

	//region Elements Manipulations
	elsSwap(i1, i2) {
		const refArr = this.refArr;

		/**Wrong approach. See below. */
		// let valTemp  = refArr[i2];
		// refArr[i2]   = refArr[i1];
		// refArr[i1]   = valTemp;

		/**
		 * In order to make framework react on Array changes,
		 * it is used more complicated way to change order of properties.
		 * @see https://vuejs.org/v2/guide/list.html#Caveats
		 */
		refArr[i1] = refArr.splice(i2, 1, refArr[i1])[0];
		return this;
	}

	elSetEarlier(i) {
		if (this.isFirst(i)) {
			return this;
		}
		this.elsSwap(i, i - 1);
		return this;
	}

	elSetLater(i) {
		if (this.isLast(i)) {
			return this;
		}
		this.elsSwap(i, i + 1);
		return this;
	}

	//endregion Elements Manipulations

	//region Helpers
	isFirst(i) {
		return i === 0;
	}

	isLast(i) {
		return this.refArr.length === i;
	}

	//endregion Helpers
}
