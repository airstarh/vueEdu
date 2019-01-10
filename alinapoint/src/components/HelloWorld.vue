<template>
	<div class="hello">
		<h1>Message: {{ hwMessage }}</h1>

		<div>
			<label>o.prop1:
				<input type="text" v-model="AnObject.prop1">
			</label>
		</div>
		<div>
			<label>o.prop2:
				<input type="text" v-model="AnObject.prop2">
			</label>
		</div>
	</div>
</template>

<script>

	export default {
		name:       'HelloWorld',
		props:      {
			hwMessage: String,
			AnObject:  Object
		},
		components: {}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.hello {
		background-color: darkgray;
	}

	h3 {
		margin: 40px 0 0;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>
