<template>
	<div id="body-container">
		<div class="router-menu-links">
			<!-- use router-link component for navigation. -->
			<!-- specify the link by passing the `to` prop. -->
			<!-- `<router-link>` will be rendered as an `<a>` tag by default -->
			<router-link to="/Simple_Page">Simple Page</router-link>
			&nbsp;
			<router-link to="/foo">Foo</router-link>
			&nbsp;
			<router-link to="/bar">Bar</router-link>
			&nbsp;
			<router-link to="/foobar">FooBar</router-link>
			&nbsp;
			<router-link to="/rawcomponent/Привет, мир!">RawComponent + Param</router-link>
			&nbsp;
			<router-link to="/rawcomponent">RawComponent</router-link>
		</div>
		<!-- route outlet -->
		<!-- component matched by the route will render here -->

		<router-view></router-view>


		<!--<div>-->
		<!--<h1>AnObject</h1>-->
		<!--<div>{{ AnObject.prop1 }}</div>-->
		<!--<div>{{ AnObject.prop2 }}</div>-->
		<!--<div>{{ AnObject.concatAnObjectProps()}}</div>-->

		<!--<HelloWorld-->
		<!--:hwMessage="msg"-->
		<!--/>-->
		<!--</div>-->
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
		},
		watch:      {
			'$route'(to, from) {
				console.log(`Router FROM:`);
				console.log(from);
				console.log(`Router TO:`);
				console.log(to);
			}
		}
	}
</script>
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
<style>
	#sapp {
		padding: 10mm;
		border: #000 solid 1px;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: left;
		color: #2c3e50;
		overflow: auto;
	}
</style>
