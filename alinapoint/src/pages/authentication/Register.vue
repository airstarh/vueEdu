<template>
  <b-container class="bv-example-row">
    <b-row class="justify-content-md-center">
      <b-col cols="12" md="5">
        <h2>
          <b-badge>Register</b-badge>&nbsp;
        </h2>
        <div>
          <ui-textbox
            label="Логин"
            v-model="name"
            icon="person_pin"
            type="text"
            :floatingLabel="true"
          ></ui-textbox>
        </div>
        <div>
          <ui-textbox
            label="Пароль"
            v-model="password"
            icon="security"
            type="text"
            :floatingLabel="true"
          ></ui-textbox>
        </div>
        <div>
          <ui-textbox label="Почта" v-model="email" icon="email" type="text" :floatingLabel="true"></ui-textbox>
        </div>
        <div>
          <ui-select label="Пол" placeholder="Выберете пол" :options="sexArray" v-model="sex"></ui-select>
        </div>
        <div>
          <ui-button raised :size="size" v-on:click="send()" type="secondary">Отправить</ui-button>
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
      sexArray
    };
  },

  methods: {
    send: function() {
      console.log("send");
    }
  }
};
</script>
<style scoped>
</style>
