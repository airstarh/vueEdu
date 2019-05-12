<template>
	<div class="hello">
		<h1>Foo</h1>
		<button @click="log()">LOG</button>
		<table class="data-table">
			<tr v-for="(fName, i) in model.arrFieldsOrder"
			    :key="i"
			>
				<td>
					<button @click="model.arrFieldsOrderSetEarlier(i)">&lt;</button>
					{{ i }}
					<button @click="model.arrFieldsOrderSetLater(i)">&gt;</button>
				</td>
				<td>{{ fName }}</td>
				<td>{{ model.attributes[fName] }}</td>
			</tr>
		</table>
	</div>
</template>

<script>
	import {GeneralModel} from "../services/GeneralModel";

	export default {
		name:  'AdminModel',
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
				this.model = GeneralModel.newInst({}, {
						tableName: 'user',
						getParams: {
							cmd: 'model',
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
