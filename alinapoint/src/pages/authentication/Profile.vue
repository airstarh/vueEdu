<template>
  <b-container class="bv-example-row">
    <b-row class="justify-content-md-center">
      <b-col cols="12" md="5">
        <b-row>
          <b-col>
            <h2>
              <b-badge>Profile</b-badge>&nbsp;
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
            label="Пароль"
            v-model="password"
            icon="security"
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
          <ui-select
            :disabled="edit"
            label="Пол"
            placeholder="Выберете пол"
            :options="sexArray"
            v-model="sex"
          ></ui-select>
        </div>
        <div>
          <ui-button raised :size="size" v-on:click="save()" type="secondary">Сохранить</ui-button>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ConfigApi from "../../configs/ConfigApi";
const sexArray = ["male", "female"];
export default {
  name: "Profile",
  props: {},
  data: function() {
    return {
      name: "",
      password: "",
      email: "",
      sex: "",
      edit: true,
      sexArray
    };
  },

  methods: {
    toggleEdit: function() {
      this.edit = !this.edit;
    },
    save: function() {
      console.log("сохранено");
    }
  }
};
</script>
<style scoped>
</style>
