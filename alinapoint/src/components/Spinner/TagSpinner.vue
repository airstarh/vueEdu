<template>
	<div id="spinner"
	     v-if="objSpinner.isOn"
	     :style="{
			'display':isDisplayed()
		 }"
	     @click="()=>{objSpinner.isOn = !objSpinner.isOn}"
	>
		<div id="spinner-image-container">
			<b-spinner label="Loading..."></b-spinner>
		</div>
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
<style>
#spinner {
	position: fixed;
	overflow: hidden;
	left:0;
	top:0;
	width: 100%;
	height: 100%;
	background-color: rgba(100, 100, 100, 0.5);
}

#spinner	#spinner-image-container{
	position: absolute;
	left: 50%;
	top: 50%;
}
</style>
