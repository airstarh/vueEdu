<template>
	<div id="body-container">
		<TagSpinner></TagSpinner>
		<div>
			<b-navbar toggleable="lg" type="dark" variant="dark">
				<b-navbar-brand href="#">NavBar</b-navbar-brand>

				<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

				<b-collapse id="nav-collapse" is-nav>
					<b-navbar-nav>
						<b-nav-item href="#">Link</b-nav-item>
						<b-nav-item href="#" disabled>Disabled</b-nav-item>
					</b-navbar-nav>

					<!-- Right aligned nav items -->
					<b-navbar-nav class="ml-auto">
						<b-nav-form>
							<b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
							<b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
						</b-nav-form>

						<b-nav-item-dropdown text="Lang" right>
							<b-dropdown-item href="#">EN</b-dropdown-item>
							<b-dropdown-item href="#">ES</b-dropdown-item>
							<b-dropdown-item href="#">RU</b-dropdown-item>
							<b-dropdown-item href="#">FA</b-dropdown-item>
						</b-nav-item-dropdown>

						<b-nav-item-dropdown right>
							<!-- Using 'button-content' slot -->
							<template slot="button-content"><em>User</em></template>
							<b-dropdown-item href="#">Profile</b-dropdown-item>
							<b-dropdown-item href="#">Sign Out</b-dropdown-item>
						</b-nav-item-dropdown>
					</b-navbar-nav>
				</b-collapse>
			</b-navbar>
		</div>
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
