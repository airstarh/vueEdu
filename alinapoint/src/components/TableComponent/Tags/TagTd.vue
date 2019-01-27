<template>
	<td>
		<div v-html="refModel.attributes[mFieldName]"></div>
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
	}
</script>
