<template>
	<table v-if="refCollection.arrFieldsOrder.length > 0"
	       class="data-table"
	>
		<TagTrTh :refCollection="refCollection"
		         :refArrFieldsOrder="refCollection.arrFieldsOrder"
		></TagTrTh>

		<TagTr v-for="(m, i) in refCollection.models"
		       :key="i"
		       :refModel="m"
		       :indexModel="i"
		       :refArrFieldsOrder="refCollection.arrFieldsOrder"
		></TagTr>
	</table>
</template>

<script>
	import {GeneralCollection} from "../../../services/GeneralMC";

	export default {
		name:       'TagTable',
		props:      {
			refCollection: GeneralCollection,
		},
		components: {
			TagTr:   () => import('./TagTr.vue'),
			TagTrTh: () => import('./TagTrTh.vue'),
			TagTd:   () => import('./TagTd.vue'),
		}
	}
</script>
