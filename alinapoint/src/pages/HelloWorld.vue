<template>
	<b-container class="bv-example-row">
		<b-row class="justify-content-md-center">
			<b-col cols="12" md="5">
				<h2>
					<b-badge>Hello World</b-badge>&nbsp;
				</h2>
				<div>
					<ui-textbox
							label="AnObject.prop1"
							v-model="AnObject.prop1"
							icon="person_pin"
							type="text"
							:floatingLabel="true"
					></ui-textbox>
				</div>
				<div>
					<ui-textbox
							label="AnObject.prop2"
							v-model="AnObject.prop2"
							icon="security"
							type="text"
							:floatingLabel="true"
					></ui-textbox>
				</div>

				<b-list-group>
					<b-list-group-item variant="dark">{{AnObject.prop1}}</b-list-group-item>
					<b-list-group-item variant="dark">{{AnObject.prop2}}</b-list-group-item>
				</b-list-group>

				<div>
					<ui-datepicker
							icon="eventpacks"
							orientation="landscape"
							picker-type="modal"
							placeholder="Select a date"
							v-model="picker8"
					>Your Birthday
					</ui-datepicker>
				</div>
			</b-col>
		</b-row>

		<b-row>
			<b-col>1 of 3</b-col>
			<b-col cols="12" md="auto">Variable width content</b-col>
			<b-col col lg="2">3 of 3</b-col>
		</b-row>
	</b-container>
</template>

<script>

	import AnObject from "../services/AnObject";

	export default {
		name:  'HelloWorld',
		props: {
			hwMessage: String,
		},
		data() {

			const twoWeeksFromNow = new Date();
			twoWeeksFromNow.setDate(twoWeeksFromNow.getDate() + 14);
			return {
				picker1:     null,
				picker2:     null,
				picker3:     null,
				picker4:     new Date((new Date()).getFullYear(), 11, 25),
				picker401:   '2019-01-08',
				picker5:     null,
				picker6:     null,
				picker7:     null,
				picker8:     null,
				picker801:   null,
				picker9:     null,
				picker10:    null,
				picker10Min: new Date(),
				picker10Max: twoWeeksFromNow,
				picker11:    null,
				picker12:    null,
				picker13:    null,
				picker14:    null,
				picker15:    new Date(),
				AnObject:    AnObject
			};
		},

		mounted() {
			this.logState();
		},
		beforeUpdate() {
			this.logState();
		},
		methods: {
			logState() {
				let milliseconds = (new Date).getTime();
				// COOKIES
				this.$cookies.set('AlinaClientlySet', milliseconds);
				let AlinaClientlySet = this.$cookies.get('AlinaClientlySet');
				console.log("COOKIES ++++++++++");
				console.log(AlinaClientlySet);

				// LOCAL STORAGE
				localStorage.AlinaClientlySet = milliseconds;
				console.log("LOCAL STORAGE ++++++++++");
				console.log(localStorage.AlinaClientlySet);
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.hello {
		background-color: darkgray;
		padding: 25px;
	}
</style>
