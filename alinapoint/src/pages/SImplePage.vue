<template>
	<div class="hello">
		<h1>SimplePage 1111111111111111111111</h1>
		<div>
			Simple text
		</div>

		<p>
			<button type="button" class="btn btn-lg btn-default">Default</button>
			<button type="button" class="btn btn-lg btn-primary">Primary</button>
			<button type="button" class="btn btn-lg btn-success">Success</button>
			<button type="button" class="btn btn-lg btn-info">Info</button>
			<button type="button" class="btn btn-lg btn-warning">Warning</button>
			<button type="button" class="btn btn-lg btn-danger">Danger</button>
			<button type="button" class="btn btn-lg btn-link">Link</button>
		</p>
	</div>
</template>

<script>

	import AnObject from "../services/AnObject";

	export default {
		name:  'SimplePage',
		props: {},
		data() {
			return {};
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
