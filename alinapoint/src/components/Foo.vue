<template>
	<div class="hello">
		<h1>Foo</h1>
		<pre>
			{{ modelString }}
		</pre>
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
					getParams: {mId:1}
				}
			);
			this.model
			    .ajaxGet()
				.then(r=>{
					this.modelString = JSON.stringify(this.model.attributes);
					return r
				})
			;

		}
	}
</script>
