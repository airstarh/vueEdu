const AnObject = {
	prop1: 'a string',
	prop2: 1234,

	concatAnObjectProps() {
		return `${this.prop1} ||| ${this.prop2}`;
	}
};

export default AnObject;
