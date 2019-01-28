<template>
	<div v-if="refArrFieldsOrder">
		<span>
			<select v-model="pageSize">
                <option v-for="(label, i) in pageSizeVariants" v-bind:value="i">
	                {{ label }}
                </option>
			</select>
		</span>
		<button v-for="(label, i) in pagesTotalArray"
		        @click="gotoPageNumber(i)"
		        :class="[
	                {active: i ===  inPageCurrentNumber}
                ]"
		>{{label}}
		</button>
	</div>
</template>

<script>
	import {GeneralCollection} from "../DataProviders/GeneralMC";

	export default {
		name:       'Pager',
		props:      {
			refCollection:       GeneralCollection,
			inPageCurrentNumber: Number,
			inPageSize:          Number,
			inRowsTotal:         Number,
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
				pageSize:         2,
				pagesTotal:       0,
				pagesTotalArray:  [],
				rowsTotal:        0,

			}
		},
		components: {},
		created() {

		},
		methods:    {
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

				/**
				 * Class specific.
				 */
				this.pagesTotal = pagesTotal;
				this.rowsTotal       = rowsTotal;
				this.pageSize        = pageSize;
				this.pagesTotalArray = new Array(pagesTotal).fill(0).map(function (v, i) {
					return i + 1
				});
				return this;
			},

			gotoPageNumber(i) {
				this.refCollection.getParams['p']  = i;
				this.refCollection.getParams['ps'] = this.pageSize;
				this.refCollection.ajaxGet();
			}
		}
	}
</script>
<style>
	button.active
	{
		background-color: black;
		color:white;
	}
</style>
