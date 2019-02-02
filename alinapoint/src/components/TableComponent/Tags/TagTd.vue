<template>
	<td>
		<div v-if="!UDisArray(refModel.attributes[mFieldName])">
			<div v-html="refModel.attributes[mFieldName]"></div>
			<br>
			<input type="text" v-model="refModel.attributes[mFieldName]">
		</div>
		<div v-else>
			<TagTable
					:refCollection="CollectionNewInst(refModel.attributes[mFieldName], {isSubCollection: true, tableName: mFieldName})"></TagTable>
		</div>
	</td>
</template>

<script>
	import UtilsData                         from "../../../Utils/UtilsData";
	import TagTable                          from "./TagTable.vue"
	import TagTr                             from "./TagTr.vue"
	import TagTrTh                           from "./TagTrTh.vue"
	import {GeneralCollection, GeneralModel} from "../DataProviders/GeneralMC";

	export default {
		name:       'TagTd',
		props:      {
			refModel:    GeneralModel,
			mFieldName:  String,
			mFieldIndex: Number,
		},
		data() {
			return {
				UtilsData: UtilsData
			}
		},
		components: {
			TagTable: () => import('./TagTable.vue'),
			TagTr:    () => import('./TagTr.vue'),
			TagTrTh:  () => import('./TagTrTh.vue'),
		},
		methods:    {
			UDisArray(x) {
				return UtilsData.isArray(x);
			},
			CollectionNewInst(models = [], options = {}) {
				return GeneralCollection.newInst(models, options)
				//return GeneralCollection.newInst(refModel.attributes[mFieldName], {isSubCollection: true})
			}
		}
	}
</script>
