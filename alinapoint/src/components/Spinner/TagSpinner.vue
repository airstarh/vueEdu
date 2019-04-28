<template>
	<div id="spinner"
	     v-if="objSpinner.isOn"
	     :style="{
						'display':isDisplayed()
					}"
	>
		SPINNER
	</div>
</template>

<script>
	import objSpinner from "./objSpinner";

	export default {
		name:       'TagSpinner',
		props:      {},
		data() {
			return {
				objSpinner: objSpinner
			}
		},
		components: {},

		methods: {
			isDisplayed() {
				return this.objSpinner.isOn
				       ? "block"
				       : "none";
			}
		}
	}
</script>
