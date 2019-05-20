<template>
	<div id="dev-panel">
		<button @click="()=>{objSpinner.isOn = !objSpinner.isOn}">Spinner</button>
		<button @click="logConfigApi()">Log ConfigApi</button>
	</div>
</template>

<script>
	import objSpinner from "../Spinner/objSpinner";
	import ConfigApi  from "../../configs/ConfigApi";

	export default {
		name:       'TagDevPanel',
		props:      {},
		data() {
			return {
				objSpinner: objSpinner,
				ConfigApi:  ConfigApi
			}
		},
		components: {},

		methods: {
			logConfigApi(){
				console.log("ConfigApi ++++++++++");
				console.log(console.log(ConfigApi));
			}
		}
	}
</script>
