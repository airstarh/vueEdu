<template>
  <b-container class="bv-example-row">
    <b-row class="justify-content-md-center">
      <b-col cols="12" md="5">
        <b-row>
          <b-col>
            <h2>
              <b-badge>Профиль</b-badge>&nbsp;
            </h2>
          </b-col>
          <b-col>
            <ui-button raised :size="size" v-on:click="toggleEdit()" type="secondary">Редактировать</ui-button>
          </b-col>
        </b-row>
        <div>
          <ui-textbox
            :disabled="edit"
            label="Логин"
            v-model="name"
            icon="person_pin"
            type="text"
            :floatingLabel="true"
          ></ui-textbox>
        </div>
        <div>
          <ui-textbox
            :disabled="edit"
            label="Почта"
            v-model="email"
            icon="email"
            type="text"
            :floatingLabel="true"
          ></ui-textbox>
        </div>
        <div>
          <ui-textbox
            :disabled="edit"
            label="О себе"
            v-model="experience"
            type="text"
            :floatingLabel="true"
          ></ui-textbox>
        </div>
        <div>
          <ui-select
            :disabled="edit"
            label="Пол"
            placeholder="Выберете пол"
            :options="sexArray"
            v-model="sex"
          ></ui-select>
        </div>
        <div>
          <ui-button
            :disabled="edit"
            raised
            :size="size"
            v-on:click="save()"
            type="secondary"
          >Сохранить</ui-button>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
const sexArray = ["male", "female"];
export default {
  name: "Profile",
  data: function() {
    return {
      name: "",
      email: "",
      sex: "",
      edit: true,
      sexArray
    };
  },
  created() {
    this.name = this.$store.state.authorization.user.name;
    this.email = this.$store.state.authorization.user.name;
    this.sex = this.$store.state.authorization.user.name;
    this.experience = this.$store.state.authorization.experience;
  },
  mounted() {
    this.$store.subscribe((mutation, state) => {
      switch (mutation.type) {
        case "authorization/checkAuthorizationSuccess":
          const user = state.authorization.user;
          this.name = user.name;
          this.email = user.email;
          this.sex = user.sex;
          this.experience = user.experience;
          break;
      }
    });
  },

  methods: {
    toggleEdit: function() {
      this.edit = !this.edit;
    },
    save: function() {
      this.$store.dispatch("profile/editProfile", {
        name: this.name,
        email: this.email,
        sex: this.sex,
        experience: this.experience
      });
    }
  }
};
</script>
<style scoped>
</style>
