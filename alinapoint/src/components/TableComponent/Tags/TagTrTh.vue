<template>
	<tr v-if="refArrFieldsOrder">
		<th>
			Actions
		</th>
		<th v-for="(f, i) in refArrFieldsOrder">
			<div class="flex-menu">
				<div class="flex-menu-item">
					<button @click="refArrCollection.arrFieldsOrderSetEarlier(i)"><</button>
				</div>
				<div class="flex-menu-item">
					{{f}}
					<button>Sort</button>
				</div>
				<div class="flex-menu-item">
					<button @click="refArrCollection.arrFieldsOrderSetLater(i)">></button>
				</div>
			</div>
			<div class="get-params">
				<div class="get-params-each">
					<input type="text" :placeholder="f">
				</div>
				<div class="get-params-each">
					<input type="text" :placeholder="`eq_${f}`">
				</div>
				<div class="get-params-each">
					<input type="text" :placeholder="`lk_${f}`">
				</div>
				<div class="get-params-each">
					<input type="text" :placeholder="`gt_${f}`">
				</div>
				<div class="get-params-each">
					<input type="text" :placeholder="`lt_${f}`">
				</div>
			</div>
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
			refArrCollection:  GeneralCollection,
			refArrFieldsOrder: Array,
		},
		components: {
			TagTable,
			TagTh,
			TagTd,
		},
		methods:{
			onChangeGetParams(fName, fValue){

			}
		}
	}
</script>
