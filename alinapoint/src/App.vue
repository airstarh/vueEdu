<template>
	<div id="body-container">
		<TagSpinner></TagSpinner>
		<TagDevPanel></TagDevPanel>
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
	</div>
</template>
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
<script>
	import TagSpinner  from "./components/Spinner/TagSpinner";
	import TagDevPanel from "./components/DevPanel/TagDevPanel";

	export default {
		name:       'app',
		data() {
			return {
				msg: 'Hello Alina',
			}
		},
		components: {
			TagSpinner,
			TagDevPanel
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

</style>
