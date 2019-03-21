<template>
	<tr v-if="refArrFieldsOrder">
		<th>
			Actions [{{refCollection.tableName}}]
			<br>
			<button @click="log()">LOG</button>
		</th>
		<th v-for="(f, i) in refArrFieldsOrder"
		    :key="`${i}_${i}`"
		    :style="{
						'background-color':dynColor()
					}"
		>
			<div class="flex-menu">
				<div class="flex-menu-item">
					<button @click="moveField(i, -1)">&lt;</button>
				</div>
				<div class="flex-menu-item">
					{{f}}
					<button @click="executeSort(f, 0)"
					        :class="[
					            'sort',
							    refCollection.isSortedBy(f),
						    ]"
					></button>
				</div>
				<div class="flex-menu-item">
					<button @click="moveField(i, +1)">&gt;</button>
				</div>
			</div>
			<div class="get-params" v-if="!refCollection.isSubCollection">
				<div class="get-params-each">
					<input type="text" :placeholder="f" v-model="refCollection.getParams[f]"
					       @keyup="executeFieldSearch()">
				</div>
				<div class="get-params-each">
					<input type="text" placeholder="=" v-model="refCollection.getParams[`eq_${f}`]"
					       @keyup="executeFieldSearch()">
				</div>
				<div class="get-params-each">
					<input type="text" placeholder="%LIKE%" v-model="refCollection.getParams[`lk_${f}`]"
					       @keyup="executeFieldSearch()">
				</div>
				<div class="get-params-each">
					<input type="text" placeholder=">" v-model="refCollection.getParams[`gt_${f}`]"
					       @keyup="executeFieldSearch()">
				</div>
				<div class="get-params-each">
					<input type="text" placeholder="<" v-model="refCollection.getParams[`lt_${f}`]"
					       @keyup="executeFieldSearch()">
				</div>
			</div>
		</th>
	</tr>
</template>

<script>
	import {GeneralCollection} from "../DataProviders/GeneralMC";

	export default {
		name:       'TagTrTh',
		props:      {
			refCollection:     GeneralCollection,
			refArrFieldsOrder: Array,
		},
		components: {
			TagTable: () => import('./TagTable.vue'),
			TagTr:    () => import('./TagTr.vue'),
			TagTd:    () => import('./TagTd.vue'),
		},
		methods:    {
			executeFieldSearch() {
				this.refCollection.pageCurrentNumber = 1;
				this.refCollection.pagerFromPropsToGet();
				this.refCollection.ajaxGet()
			},

			executeSort(field, level) {
				this.refCollection.setSortProps(field, level);
				this.refCollection.sortFromPropsToGet();
				this.refCollection.ajaxGet();
			},

			moveField(curIndex, where) {
				if (where < 0) {
					this.refCollection.arrFieldsOrderSetEarlier(curIndex);
				} else {
					this.refCollection.arrFieldsOrderSetLater(curIndex);
				}
				//this.$set(this.refCollection.flagSignal, !this.refCollection.flagSignal);
				this.refCollection.flagSignal = !this.refCollection.flagSignal;
				this.$forceUpdate();
			},

			log() {
				console.log("TagTrTh ++++++++++");
				console.log(this.refCollection);
			},

			dynColor() {
				let r = 0;
				let g = 0;
				let b = 0;
				r = Math.floor(Math.random() * 255);
				g = Math.floor(Math.random() * 255);
				b = Math.floor(Math.random() * 255);
				let color = `rgb(${r}, ${g}, ${b})`;
				return color
			}
		},
		watch:      {
			refArrFieldsOrder() {
				// console.log("refCollection.arrFieldsOrder ++++++++++");
				// console.log(this);
			},
			'refCollection.flagSignal': {
				handler() {
					console.log("refCollection.flagSignal ++++++++++");
					console.log(this.refCollection.flagSignal);
				},
				deep: true
			}
		}
	}
</script>
