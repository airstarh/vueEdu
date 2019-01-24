<template>
	<table v-if="refArrCollection.models.length > 0"
	       class="data-table"
	>
		<TagTrTh :refArrCollection="refArrCollection"
		         :refArrFieldsOrder="refArrCollection.arrFieldsOrder"
		></TagTrTh>

		<TagTr v-for="(m, i) in refArrCollection.models"
		       :refModel="m"
		       :indexModel="i"
		       :refArrFieldsOrder="refArrCollection.arrFieldsOrder"
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
			refArrCollection: GeneralCollection,
		},
		components: {
			TagTr,
			TagTrTh,
			TagTd,
		}
	}
</script>
