<template>
	<div id="body-container">
		<TagMenuHorizontal></TagMenuHorizontal>
		<TagDevPanel></TagDevPanel>
		<!-- use router-link component for navigation. -->
		<!-- specify the link by passing the `to` prop. -->
		<!-- `<router-link>` will be rendered as an `<a>` tag by default -->
		<!--<router-link to="/Simple_Page">Simple Page</router-link>-->
		<!-- route outlet -->
		<!-- component matched by the route will render here -->
		<router-view></router-view>
		<TagSpinner></TagSpinner>
	</div>
</template>
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
<script>
	import TagSpinner        from "./components/Spinner/TagSpinner";
	import TagDevPanel       from "./components/DevPanel/TagDevPanel";
	import TagMenuHorizontal from "./components/Menu/TagMenuHorizontal";

	export default {
		name:       'App',
		data() {
			return {
				msg: 'Hello Alina',
			}
		},
		components: {
			TagSpinner,
			TagMenuHorizontal,
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
