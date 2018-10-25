<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<div>
			<input type="text" v-model="msg">
		</div>

		<div>|||</div>

		<div>
			<input type="text" v-model="o.prop1">
		</div>
	</div>
</template>

<script>

	export default {
		name:       'HelloWorld',
		props:      {
			msg: String,
			o:   Object
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
