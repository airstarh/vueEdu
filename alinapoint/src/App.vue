<script>
	import HelloWorld from './components/HelloWorld.vue'
	import NewAnObject   from "./services/AnObject";

	export default {
		name: 'app',
		data: function(){
			return {
				o: NewAnObject
			}
		},
		components: {
			HelloWorld
		}
	}
</script>

<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png">

		<div>
			<h1>AnObject</h1>
			<div>{{this.o.prop1}}</div>
			<div>{{this.o.prop2}}</div>
			<div>{{this.o.concatAnObjectProps()}}</div>
		</div>

		<HelloWorld
				msg="Alina Point"
				:o=this.o
		/>

	</div>
</template>

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
