<template>
	<div class="hello">
		<h1>Collection viewer</h1>
		<div class="">
			<router-link to="/bar/user">user</router-link>
		</div>
		<div class="">
			<router-link to="/bar/article">article</router-link>
		</div>
		<button @click="log()">LOG</button>
		<TagTable :refCollection="collection"></TagTable>
	</div>
</template>

<script>
	import {GeneralCollection} from "./TableComponent/DataProviders/GeneralMC";
	import TagTable            from  "./TableComponent/Tags/TagTable.vue"
	import StorageStates       from "./TableComponent/DataProviders/StorageStates";
	export default {
		data() {
			return {
				collectionTableName: 'user',
				collection: GeneralCollection,
			}
		},
		components: {
			TagTable
		},

		created() {
			this.processRouterData(this.$route);
			this.getCollection();
		},

		methods: {
			log() {
				console.log("Bar LOG ++++++++++");
				console.log(this.collection);

				console.log("StorageStates.racks ++++++++++");
				console.log(StorageStates.racks);

				console.log("xxx ++++++++++");
				console.log(this.$route.params);
			},

			getCollection() {
				this.collection = new GeneralCollection([], {
						tableName: this.collectionTableName,
						getParams: {
							cmd: 'collection',
						}
					}
				);
				this.collection.ajaxGet();
			},
			processRouterData(to) {
				if (to.params.collectionName) {
					this.collectionTableName = to.params.collectionName;
				}
			}
		},
		watch:      {
			'$route'(to, from) {
				this.processRouterData(to);
				this.getCollection();
			}
		}

	}
</script>
