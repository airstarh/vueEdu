<template>
	<div v-if="refCollection.arrFieldsOrder.length > 0">
		<span>
			<select v-model="refCollection.pageSize"
			        @change="onChangePageSize($event)"
			>
                <option v-for="(label, i) in pageSizeVariants" v-bind:value="label"
                        :key="i"
                >
	                {{ label }}
                </option>
			</select>
		</span>
		<span>
			<button v-for="(label, i) in pagesTotalArray"
			        :key="i"
			        @click="gotoPageNumber(label)"
			        :class="[
		                {active: label == refCollection.pageCurrentNumber}
	                ]"
			>{{label}}</button>
		</span>
	</div>
</template>

<script>
	import {GeneralCollection} from "../DataProviders/GeneralMC";

	export default {
		name:    'Pager',
		props:   {
			refCollection: GeneralCollection,
		},
		data() {
			return {
				pageSizeVariants: [
					2,
					5,
					10,
					15,
					20,
					100,
					1000,
				],
				pagesTotal:       0,
				pagesTotalArray:  [],

			}
		},
		created() {
			this.calcPagesTotal(this.refCollection.rowsTotal, this.refCollection.pageSize);
		},
		watch:   {
			'refCollection.models.length'() {
				this.calcPagesTotal(this.refCollection.rowsTotal, this.refCollection.pageSize);
			},
		},
		methods: {
			calcPagesTotal(rt, ps) {
				/**
				 * Base calculation.
				 */
				let rowsTotal = rt;
				let pageSize  = ps;
				if (pageSize <= 0) {
					pageSize = rowsTotal
				}
				let pagesTotal = Math.ceil(rowsTotal / pageSize);

				// Class specific.
				this.pagesTotal      = pagesTotal;
				this.pagesTotalArray = new Array(pagesTotal).fill(0).map(function (v, i) {
					return i + 1
				});

				return this;
			},

			gotoPageNumber(i) {
				this.refCollection.pageCurrentNumber = i;
				this.refCollection.pagerFromPropsToGet();
				this.refCollection.ajaxGet();
			},

			onChangePageSize() {
				this.calcPagesTotal(this.refCollection.rowsTotal, this.refCollection.pageSize);
				this.gotoPageNumber(1);
			},
		}
	}
</script>
<style>
	button.active
	{
		background-color: black;
		color:            white;
	}
</style>
