<template>
	<div class="hello">
		<h1>Admin Collection</h1>
		<div class="">
			<router-link to="/admincollection/user">user</router-link>
		</div>
		<div class="">
			<router-link to="/admincollection/article">article</router-link>
		</div>
		<button @click="log()">LOG</button>
		<Pager
				:refCollection="collection"
		></Pager>

		<TagTable :refCollection="collection"></TagTable>

		<Pager
				:refCollection="collection"
		></Pager>

		<pre>
			{{JSON.stringify(collection, null, '   ')}}
		</pre>

	</div>
</template>

<script>
	import {GeneralCollection} from "../services/GeneralCollection";
	import TagTable            from "../components/TableComponent/Tags/TagTable.vue"
	import Pager               from "../components/TableComponent/Tags/Pager.vue"
	import StorageStates       from "../services/StorageStates";

	export default {
		name:       'AdminCollection',
		data() {
			return {
				collectionTableName: 'user',
				collection:          GeneralCollection,
			}
		},
		components: {
			TagTable,
			Pager,
		},

		created() {
			this.processRouterData(this.$route);
			this.getCollection();
		},

		methods: {
			log() {
				console.log(" ");
				console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>");
				console.log("Bar LOG ++++++++++");
				console.log(this.collection);
				console.log(" ");
				console.log("StorageStates.racks ++++++++++");
				console.log(StorageStates.racks);
				console.log(" ");
				console.log("this.$route.params ++++++++++");
				console.log(this.$route.params);
				console.log("<<<<<<<<<<<<<<<<<<<<<<<<");
				console.log(" ");
			},

			getCollection() {
				this.collection = GeneralCollection.newInst([], {
					tableName: this.collectionTableName,
					getParams: {
						cmd: 'collection',
						m:   this.collectionTableName,
					}
				});
				this.collection.ajaxGet();
			},

			processRouterData(to) {
				if (to.params.collectionName) {
					this.collectionTableName = to.params.collectionName;
				}
			}
		},
		watch:   {
			'$route'(to, from) {
				this.processRouterData(to);
				this.getCollection();
			}
		}

	}
</script>
