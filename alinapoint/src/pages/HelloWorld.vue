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
			return {
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
