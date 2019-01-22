<template>
	<div class="hello">
		<h1>Foo</h1>
		<button @click="log()">LOG</button>
		<table class="data-table">
			<tr v-for="(fName, i) in model.arrFieldsOrder">
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
				model: {},
			}
		},

		created() {
			this.getModel();
		},
		methods: {
			log() {
				console.log("Foo LOG ++++++++++");
				console.log(this.model.arrFieldsOrder);
			},

			getModel() {
				this.model = new GeneralModel({}, {
						tableName: 'user',
						getParams: {
							cmd: 'modelOne',
							mId: 3,
						}
					}
				);
				this.model
				    .ajaxGet()
				    .then(r => {
					    return r
				    })
				;
			}
		}
	}
</script>

<style scoped>

</style>
