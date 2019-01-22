<template>
	<tr v-if="refModel.attributes"
	    :class="[
	    `model-index-${indexModel}`,
	    {odd: indexModel%2 ===  0}
	    ]"
	>
		<TagTd v-if="refModel.arrFieldsOrder.length > 0"
		       v-for="(f, i) in refModel.arrFieldsOrder"
		       :refModel="refModel"
		       :mFieldName="f"
		       :mFieldIndex="i"
		></TagTd>
	</tr>
</template>

<script>
	import TagTable       from "./TagTable.vue"
	import TagTrTh        from "./TagTrTh.vue"
	import TagTd          from "./TagTd.vue"
	import {GeneralModel} from "../DataProviders/GeneralMC";

	export default {
		name:       'TagTr',
		props:      {
			refModel:   GeneralModel,
			indexModel: Number,
		},
		components: {
			TagTable,
			TagTrTh,
			TagTd,
		},
	}
</script>
