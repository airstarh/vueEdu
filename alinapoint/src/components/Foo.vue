<template>
	<div class="hello">
		<h1>Foo</h1>
		<div v-for="(value, key) in model.attributes">
			{{ key }}: {{ value }}
		</div>
	</div>
</template>

<script>
	import {GeneralModel} from "./TableComponent/DataProviders/GeneralMC";

	export default {
		data() {
			return {
				model: {},
				modelString: 'NO DATA'
			}
		},
		created() {
			this.model = new GeneralModel({}, {
					tableName: 'user',
					getParams: {mId:3}
				}
			);
			this.model
			    .ajaxGet()
				.then(r=>{
					this.modelString = JSON.stringify(this.model.attributes);
					return r
				})
			;
		},
		methods: {

		}
	}
</script>
