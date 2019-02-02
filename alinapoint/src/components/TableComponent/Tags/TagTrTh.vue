<template>
	<tr v-if="refArrFieldsOrder">
		<th>
			Actions
		</th>
		<th v-for="(f, i) in refArrFieldsOrder">
			<div class="flex-menu">
				<div class="flex-menu-item">
					<button @click="refCollection.arrFieldsOrderSetEarlier(i)"><</button>
				</div>
				<div class="flex-menu-item">
					{{f}}
					<button @click="executeSort(f, 0)"
					        :key="refCollection.flagSignal"
					        :class="[
					            'sort',
							    refCollection.isSortedBy(f),
						    ]"
					></button>
				</div>
				<div class="flex-menu-item">
					<button @click="refCollection.arrFieldsOrderSetLater(i)">></button>
				</div>
			</div>
			<div class="get-params">
				<div class="get-params-each">
					<input type="text" :placeholder="f" v-model="refCollection.getParams[f]" @keyup="executeFieldSearch()">
				</div>
				<div class="get-params-each">
					<input type="text" placeholder="=" v-model="refCollection.getParams[`eq_${f}`]" @keyup="executeFieldSearch()">
				</div>
				<div class="get-params-each">
					<input type="text" placeholder="%LIKE%" v-model="refCollection.getParams[`lk_${f}`]" @keyup="executeFieldSearch()">
				</div>
				<div class="get-params-each">
					<input type="text" placeholder=">" v-model="refCollection.getParams[`gt_${f}`]" @keyup="executeFieldSearch()">
				</div>
				<div class="get-params-each">
					<input type="text" placeholder="<" v-model="refCollection.getParams[`lt_${f}`]" @keyup="executeFieldSearch()">
				</div>
			</div>
		</th>
	</tr>
</template>

<script>
	import TagTable            from "./TagTable.vue"
	import TagTr               from "./TagTr.vue"
	import TagTd               from "./TagTd.vue"
	import {GeneralCollection} from "../DataProviders/GeneralMC";

	export default {
		name:       'TagTrTh',
		props:      {
			refCollection:     GeneralCollection,
			refArrFieldsOrder: Array,
		},
		components: {
			TagTable: () => import('./TagTable.vue'),
			TagTr: () => import('./TagTr.vue'),
			TagTd: () => import('./TagTd.vue'),
		},
		methods:{
			executeFieldSearch(){
				this.refCollection.pageCurrentNumber = 1;
				this.refCollection.pagerFromPropsToGet();
				this.refCollection.ajaxGet()
			},

			executeSort(field, level){
				this.refCollection.setSortProps(field, level);
				this.refCollection.sortFromPropsToGet();
				this.refCollection.ajaxGet();
			}
		}
	}
</script>
