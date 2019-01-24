<template>
	<tr v-if="refArrFieldsOrder">
		<th>
			Actions
		</th>
		<th v-for="(f, i) in refArrFieldsOrder">
			<button @click="refArrCollection.arrFieldsOrderSetEarlier(i)"><</button>
			{{f}}
			<button @click="refArrCollection.arrFieldsOrderSetLater(i)">></button>
		</th>
	</tr>
</template>

<script>
	import TagTable            from "./TagTable.vue"
	import TagTh               from "./TagTrTh.vue"
	import TagTd               from "./TagTd.vue"
	import {GeneralCollection} from "../DataProviders/GeneralMC";

	export default {
		name:       'TagTrTh',
		props:      {
			refArrCollection: GeneralCollection,
			refArrFieldsOrder: Array,
		},
		components: {
			TagTable,
			TagTh,
			TagTd,
		},
	}
</script>
