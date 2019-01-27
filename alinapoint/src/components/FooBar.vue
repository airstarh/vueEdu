<template>
	<div class="hello">
		<h1>FooBar</h1>
	</div>
</template>

<script>

	import AnObject    from "../services/AnObject";
	import UtilsObject from "../Utils/UtilsObject";

	export default {
		name:  'FooBar',
		props: {

		},
		data() {
			return {
				AnObject: AnObject,
				myVar: null,
			};
		},

		created(){
			const o = {};
			let p = 'a.b.c';
			let v = [1,2,3];
			//let v = 'lalala';
			UtilsObject.setByPath(o, p, v);

			p = 'a.b.c.d';
			v = [3,2,1];
			UtilsObject.setByPath(o, p, v);

			console.log("FooBar test ++++++++++");
			console.log(o);
			console.log(UtilsObject.getByPath(o, 'a.b.c'));

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.hello {
		background-color: darkgray;
	}

	h3 {
		margin: 40px 0 0;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>
