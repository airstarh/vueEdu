<template>
	<table v-if="refCollection.models.length > 0"
	       class="data-table"
	>
		<TagTrTh :refCollection="refCollection"
		         :refArrFieldsOrder="refCollection.arrFieldsOrder"
		></TagTrTh>

		<TagTr v-for="(m, i) in refCollection.models"
		       :refModel="m"
		       :indexModel="i"
		       :refArrFieldsOrder="refCollection.arrFieldsOrder"
		></TagTr>
	</table>
</template>

<script>
	import TagTr               from "./TagTr.vue"
	import TagTrTh             from "./TagTrTh.vue"
	import TagTd               from "./TagTd.vue"
	import {GeneralCollection} from "../DataProviders/GeneralMC";

	export default {
		name:       'TagTable',
		props:      {
			refCollection: GeneralCollection,
		},
		components: {
			TagTr,
			TagTrTh,
			TagTd,
		}
	}
</script>
