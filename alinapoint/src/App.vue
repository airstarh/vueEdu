<template>
	<div id="sapp">
		<h1>Hello Router!</h1>
		<p>
			<!-- use router-link component for navigation. -->
			<!-- specify the link by passing the `to` prop. -->
			<!-- `<router-link>` will be rendered as an `<a>` tag by default -->
			<router-link to="/foo">Go to Foo</router-link>
			&nbsp;
			<router-link to="/bar">Go to Bar</router-link>
			&nbsp;
			<router-link to="/foobar">Go to FooBar</router-link>
			&nbsp;
			<router-link to="/rawcomponent">Go to RawComponent</router-link>
		</p>
		<!-- route outlet -->
		<!-- component matched by the route will render here -->
		<router-view></router-view>


		<div>
			<h1>AnObject</h1>
			<div>{{ AnObject.prop1 }}</div>
			<div>{{ AnObject.prop2 }}</div>
			<div>{{ AnObject.concatAnObjectProps()}}</div>

			<HelloWorld
					:hwMessage="msg"
			/>
		</div>
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
	#sapp {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
