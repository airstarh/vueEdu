<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <!-- <b-navbar-brand href="#">NavBar</b-navbar-brand> -->

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav v-if="isAuthenticated.length>0">
          <b-button v-on:click="logout()">Выход</b-button>
          <b-nav-item to="/profile">Профиль</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav v-else>
          <b-nav-item to="/login">Вход</b-nav-item>
          <b-nav-item to="/register">Регистрация</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "TagMenuHorizontal",
  computed: {
    isAuthenticated: function() {
      return this.$store.getters["authorization/isAuthenticated"];
    }
  },

  methods: {
    logout: function() {
      if (this.$store.getters["authorization/isAuthenticated"]) {
        this.$store.dispatch("authorization/logout");
      }
    }
  }
};
</script>
<style>
</style>
