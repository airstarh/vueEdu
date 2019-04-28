<template>
	<div id="dev-panel">
		<button @click="()=>{objSpinner.isOn = !objSpinner.isOn}">Spinner</button>
	</div>
</template>

<script>
	import objSpinner from "../Spinner/objSpinner";

	export default {
		name:       'TagDevPanel',
		props:      {},
		data() {
			return {
				objSpinner: objSpinner
			}
		},
		components: {},

		methods: {}
	}
</script>
