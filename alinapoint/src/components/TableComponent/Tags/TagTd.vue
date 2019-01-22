<template>
	<td>
		{{refModel.attributes[mFieldName]}}
		<br>
		<input type="text" v-model="refModel.attributes[mFieldName]">
	</td>
</template>

<script>
	import TagTable       from "./TagTable.vue"
	import TagTr          from "./TagTr.vue"
	import TagTrTh        from "./TagTrTh.vue"
	import {GeneralModel} from "../DataProviders/GeneralMC";

	export default {
		name:       'TagTd',
		props:      {
			refModel:    GeneralModel,
			mFieldName:  String,
			mFieldIndex: Number,
		},
		components: {
			TagTable,
			TagTr,
			TagTrTh,
		},
		updated(){
			console.log("TagTd  updated++++++++++");
			console.log(this.refModel.arrFieldsOrder);
		}
	}
</script>
