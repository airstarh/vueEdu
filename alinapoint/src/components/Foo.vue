<template>
	<div class="hello">
		<h1>Foo</h1>
		<button @click="log()">LOG</button>
		<table class="model-table">
			<tr
					v-for="(fName, i) in model.arrFieldsOrder"
					v-bind:key="i"
			>
				<td>
					<button @click="model.arrFieldsOrderSetEarlier(i)"><</button>
					{{ i }}
					<button @click="model.arrFieldsOrderSetLater(i)">></button>
				</td>
				<td>{{ fName }}</td>
				<td>{{ model.attributes[fName] }}</td>
			</tr>
		</table>
	</div>
</template>

<script>
	import {GeneralModel} from "./TableComponent/DataProviders/GeneralMC";

	export default {
		data() {
			return {
				model:       {
					//arrFieldsOrder: [],
				},
				modelString: 'NO DATA'
			}
		},
		created() {
			this.model = new GeneralModel({}, {
					tableName: 'user',
					getParams: {mId: 3}
				}
			);
			this.model
			    .ajaxGet()
			    .then(r => {
				    return r
			    })
			;
		},
		methods: {
			log(){
				console.log("Foo LOG ++++++++++");
				console.log(this.model.arrFieldsOrder);
			},
		}
	}
</script>

<style>
	table.model-table {
		border: #000 solid 1px;
		border-collapse: collapse;
	}

	table.model-table tr td {
		border: #000 solid 1px;
		padding: 3px;
		vertical-align: top;
	}
</style>
