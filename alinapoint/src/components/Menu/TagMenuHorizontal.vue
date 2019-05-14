<template>

	<div>
		<b-navbar toggleable="lg" type="dark" variant="dark">
			<b-navbar-brand href="#">NavBar</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav>
					<!--<b-nav-item href="#">Link</b-nav-item>-->
					<!--<b-nav-item href="#" disabled>Disabled</b-nav-item>-->
					<b-nav-item to="/hw">H.W.</b-nav-item>
					<b-nav-item to="/egBootstrap">EG:Bootstrap</b-nav-item>
					<b-nav-item to="/admincollection">Edit Collection</b-nav-item>
					<b-nav-item to="/adminmodel">Edit Model</b-nav-item>
					<b-nav-item to="/rawcomponent">RawComponent</b-nav-item>
					<b-nav-item to="/rawcomponent/Привет, мир!">RawComponent Param</b-nav-item>
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

</template>

<script>
	export default {
		name:       'TagMenuHorizontal',
		props:      {},
		data() {
			return {}
		},
		components: {},

		methods: {}
	}
</script>
<style>

</style>
