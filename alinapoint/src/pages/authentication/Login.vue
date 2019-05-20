<template>
	<b-container class="bv-example-row">
		<b-row class="justify-content-md-center">
			<b-col cols="12" md="5">
				<h2>
					<b-badge>Login</b-badge>&nbsp;
				</h2>
				<div>
					<ui-textbox
							label="Username"
							v-model="ConfigApi.prop1"
							icon="person_pin"
							type="text"
							:floatingLabel="true"
					></ui-textbox>
				</div>
				<div>
					<ui-textbox
							label="Password"
							v-model="ConfigApi.prop2"
							icon="security"
							type="text"
							:floatingLabel="true"
					></ui-textbox>
				</div>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
	import ConfigApi from "../../configs/ConfigApi";

	export default {
		name:  'Login',
		props: {

		},
		data() {
			return {
				ConfigApi
			};
		},

		mounted() {

		},
		beforeUpdate() {

		},
		methods: {

		}
	}
</script>
<style scoped>

</style>
