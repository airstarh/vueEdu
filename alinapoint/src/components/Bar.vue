<template>
	<div class="hello">
		<h1>Bar</h1>
		<button @click="log()">LOG</button>
		<TagTable :refArrCollection="collection"></TagTable>
	</div>
</template>

<script>
	import {GeneralCollection} from "./TableComponent/DataProviders/GeneralMC";
	import TagTable from  "./TableComponent/Tags/TagTable.vue"
	export default {
		data() {
			return {
				collection: GeneralCollection,
			}
		},

		created() {
			this.getCollection();
		},

		methods: {
			log() {
				console.log("Foo LOG ++++++++++");
				console.log(this.collection);
			},

			getCollection() {
				this.collection = new GeneralCollection([], {
						tableName: 'user',
						getParams: {
							cmd: 'collection',
						}
					}
				);
				this.collection.ajaxGet();
			}
		},
		components: {
			TagTable
		},
	}
</script>
