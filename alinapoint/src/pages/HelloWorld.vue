<template>
	<div class="hello">
		<h1>Message: {{ hwMessage }}</h1>
		<div>
			<label>o.prop1:
				<input type="text" v-model="AnObject.prop1">
			</label>
		</div>
		<div>
			<label>o.prop2:
				<input type="text" v-model="AnObject.prop2">
			</label>
		</div>

		<b-list-group>
			<b-list-group-item variant="dark">{{AnObject.prop1}}</b-list-group-item>
			<b-list-group-item variant="dark">{{AnObject.prop2}}</b-list-group-item>
		</b-list-group>

		<div>
			<ui-datepicker
					icon="eventpacks"
					orientation="landscape"
					picker-type="modal"
					placeholder="Select a date"
					v-model="picker8"
			>Your Birthday</ui-datepicker>
		</div>

	</div>
</template>

<script>

	import AnObject from "../services/AnObject";

	export default {
		name:    'HelloWorld',
		props:   {
			hwMessage: String,
		},
		data() {

			const twoWeeksFromNow = new Date();
			twoWeeksFromNow.setDate(twoWeeksFromNow.getDate() + 14);
			return {
				picker1: null,
				picker2: null,
				picker3: null,
				picker4: new Date((new Date()).getFullYear(), 11, 25),
				picker401: '2019-01-08',
				picker5: null,
				picker6: null,
				picker7: null,
				picker8: null,
				picker801: null,
				picker9: null,
				picker10: null,
				picker10Min: new Date(),
				picker10Max: twoWeeksFromNow,
				picker11: null,
				picker12: null,
				picker13: null,
				picker14: null,
				picker15: new Date(),
				AnObject: AnObject
			};
		},

		mounted() {
			this.logState();
		},
		beforeUpdate() {
			this.logState();
		},
		methods: {
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
