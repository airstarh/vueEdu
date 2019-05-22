<template>
  <b-container class="bv-example-row">
    <b-row class="justify-content-md-center">
      <b-col cols="12" md="5">
        <h2>
          <b-badge>Login</b-badge>&nbsp;
        </h2>
        <div>
          <ui-textbox
            label="Email"
            v-model="email"
            icon="person_pin"
            type="text"
            :floatingLabel="true"
          ></ui-textbox>
        </div>
        <div>
          <ui-textbox
            label="Password"
            v-model="password"
            icon="security"
            type="text"
            :floatingLabel="true"
          ></ui-textbox>
        </div>
        <div>
          <ui-button raised :size="size" v-on:click="login()" type="secondary">Вход</ui-button>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Login",
  props: {},
  data() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    login: function() {
      this.$store.dispatch("authorization/login", {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>
<style scoped>
</style>
