<template>
	<div>
		<h1>Tester</h1>

		<h2>RES</h2>
		<pre>{{res}}</pre>

		<h2>Init</h2>
		<pre>{{o}}</pre>
	</div>
</template>

<script>

	import AnObject    from "../services/AnObject";
	import {Ajax}      from "../services/Ajax";
	import UtilsObject from "../Utils/UtilsObject";

	export default {
		name:  'Tester',
		props: {},
		data() {
			return {
				res: [],

				////testUtilsDataObjSetGetByPath
				o: {
					name:      'John',
					age:       25,
					ageString: '25',
					roles:     ['ADMIN', 'GUEST'],
					files:     [
						{id: 1, name: 'selfy', tags: ['photo', 'me']},
						{id: 2, name: 'passport'},
						{id: 3, name: 'Driver License'},
					],
				},
			}
		}
		,

		mounted() {
			this.testUtilsDataObjSetGetByPath();
			//this.logState();
			//this.doSimpleAjaxCall();
		}
		,
		beforeUpdate() {
			//this.logState();
		}
		,
		methods: {
			testUtilsDataObjSetGetByPath() {
				let path;
				let r;
				let value;

				//Getters
				path = 'roles.1';
				path = 'files.0.tags.0';
				r    = UtilsObject.getByPath(this.o, path);
				this.res.push(r);

				/// Setters
				path  = 'surname';
				value = 'Konstantin';

				path  = 'roles.5';
				value = 'SECRETARY';

				path  = 'notExistingPath.lalala.4';
				value = 'newValue';
				UtilsObject.setByPath(this.o, path, value);

				/// Getters
				r = UtilsObject.getByPath(this.o, path);
				this.res.push(r);

			}
			,
			doSimpleAjaxCall() {
				const options = {
					url:       'http://alinazero:8080/alinaRestAccept/TestGet',
					getParams: {
						a: JSON.stringify([10, 20, 30]),
						b: 'Simple String',
						d: 20.05,
						f: JSON.stringify({p1: 100, p2: 'lalala'}),
					}
				};
				const aj      = Ajax.newInst(options);
				aj.ajaxGet()
				  .then(r => {
					  return r.json();
				  })
				  .then(r => {
					  console.log("HW ++++++++++");
					  console.log(r);
				  })
				;
			}
			,
			logState() {
				let milliseconds = (new Date).getTime();
				// COOKIES
				this.$cookies.set('AlinaClientlySet', milliseconds);
				let AlinaClientlySet = this.$cookies.get('AlinaClientlySet');
				console.log("COOKIES ++++++++++");
				console.log(AlinaClientlySet);

				// LOCAL STORAGE
				localStorage.AlinaClientlySet = milliseconds;
				console.log("LOCAL STORAGE ++++++++++");
				console.log(localStorage.AlinaClientlySet);
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.hello {
		background-color: darkgray;
		padding: 25px;
	}
</style>
