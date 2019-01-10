<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png">

		<div>
			<h1>AnObject</h1>
			<div>{{ AnObject.prop1 }}</div>
			<div>{{ AnObject.prop2 }}</div>
			<div>{{ AnObject.concatAnObjectProps()}}</div>
		</div>

		<HelloWorld
				:hwMessage="msg"
		/>

	</div>
</template>
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
<script>
	import HelloWorld from './components/HelloWorld.vue'
	import AnObject   from "./services/AnObject";

	export default {
		name:       'app',
		data() {
			return {
				msg:      'Hello Alina',
				AnObject: AnObject
			}
		},
		components: {
			HelloWorld
		}
	}
</script>
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
