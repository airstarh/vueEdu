class AnObject {
	prop1 = 1;
	prop2 = 'string';

	constructor(){
		this.prop1 = 222;
	}

	concatAnObjectProps() {
		return `${this.prop1} ||| ${this.prop2}`
	}
}
const NewAnObject = new AnObject();
export default NewAnObject;

