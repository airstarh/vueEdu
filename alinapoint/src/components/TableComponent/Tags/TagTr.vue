<template>
	<tr v-if="refModel.attributes"
	    :class="[
	    `model-index-${indexModel}`,
	    {odd: indexModel%2 ===  0}
	    ]"
	>
		<td>
			<button @click="log()">LOG</button>
			<br/>
			<button @click="update()">Update</button>
			<br/>
			<button>Insert</button>
			<br/>
			<button>Edit</button>
			<br/>
			<button>Del</button>
			<br/>

		</td>
		<TagTd v-if="refArrFieldsOrder.length > 0"
		       v-for="(f, i) in refArrFieldsOrder"
		       :refModel="refModel"
		       :mFieldName="f"
		       :mFieldIndex="i"
		></TagTd>
	</tr>
</template>

<script>
	import TagTable       from "./TagTable.vue"
	import TagTrTh        from "./TagTrTh.vue"
	import TagTd          from "./TagTd.vue"
	import {GeneralModel} from "../DataProviders/GeneralMC";

	export default {
		name:       'TagTr',
		props:      {
			refModel:          GeneralModel,
			indexModel:        Number,
			refArrFieldsOrder: Array,
		},
		methods:    {
			log() {
				console.log("TagTr refModel ++++++++++");
				console.log(this.refModel);
			},
			update() {
				this.refModel.ajaxPut();
			}
		},
		components: {
			TagTable: () => import('./TagTable.vue'),
			TagTrTh:  () => import('./TagTrTh.vue'),
			TagTd:    () => import('./TagTd.vue'),
		},
	}
</script>
