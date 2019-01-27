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
					<button>Sort</button>
				</div>
				<div class="flex-menu-item">
					<button @click="refCollection.arrFieldsOrderSetLater(i)">></button>
				</div>
			</div>
			<div class="get-params">
				<div class="get-params-each">
					<input type="text" :placeholder="f" v-model="refCollection.getParams[f]" @keyup="refCollection.ajaxGet()">
				</div>
				<div class="get-params-each">
					<input type="text" :placeholder="`eq_${f}`" v-model="refCollection.getParams[`eq_${f}`]" @keyup="refCollection.ajaxGet()">
				</div>
				<div class="get-params-each">
					<input type="text" :placeholder="`lk_${f}`" v-model="refCollection.getParams[`lk_${f}`]" @keyup="refCollection.ajaxGet()">
				</div>
				<div class="get-params-each">
					<input type="text" :placeholder="`gt_${f}`" v-model="refCollection.getParams[`gt_${f}`]" @keyup="refCollection.ajaxGet()">
				</div>
				<div class="get-params-each">
					<input type="text" :placeholder="`lt_${f}`" v-model="refCollection.getParams[`lt_${f}`]" @keyup="refCollection.ajaxGet()">
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
			refCollection:     GeneralCollection,
			refArrFieldsOrder: Array,
		},
		components: {
			TagTable,
			TagTh,
			TagTd,
		},
		methods:{
			onChangeGetParams(fName, fValue){

				console.log("onChangeGetParams ++++++++++");
				console.log(fName);
				console.log(fValue);

				// this.refCollection.getParams[fName] = fValue;
				// this.refCollection.ajaxGet();
			}
		}
	}
</script>
