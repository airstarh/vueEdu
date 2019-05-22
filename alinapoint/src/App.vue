<template>
  <div id="body-container">
    <TagMenuHorizontal></TagMenuHorizontal>
    <Spinner v-if="isPreloader"/>
    <router-view></router-view>
  </div>
</template>
<script>
import Spinner from "./components/Spinner/Spinner";
import TagMenuHorizontal from "./components/Menu/TagMenuHorizontal";
import { mapState } from "vuex";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    TagMenuHorizontal,
    Spinner
  },

  computed: {
    ...mapGetters(["isPreloader"])
  },
  created: function() {
    console.log(this.$store);
    if (this.$store.getters["authorization/isAuthenticated"]) {
      this.$store.dispatch("authorization/checkAuthorization");
    }
  },
  methods: {
    save: function() {
      this.$store.dispatch("preloaderOn");
    }
  }
};
</script>

