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
		<Pager
				:refCollection="collection"
				:flagSignal="collection.flagSignal"
		></Pager>

		<TagTable :refCollection="collection"></TagTable>

		<Pager
				:refCollection="collection"
				:flagSignal="collection.flagSignal"
		></Pager>
	</div>
</template>

<script>
	import {GeneralCollection} from "./TableComponent/DataProviders/GeneralMC";
	import TagTable            from "./TableComponent/Tags/TagTable.vue"
	import Pager               from "./TableComponent/Tags/Pager.vue"
	import StorageStates       from "./TableComponent/DataProviders/StorageStates";

	export default {
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
				this.collection = GeneralCollection.newInst([], {tableName: this.collectionTableName,});
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
