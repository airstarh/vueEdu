import Vue        from 'vue/dist/vue.js'
import VueRouter  from 'vue-router'
import VueCookie  from 'vue-cookie'

import BootstrapVue from 'bootstrap-vue'
import '../public/a.scss'


import App             from './App.vue'
import AdminModel      from './pages/AdminModel'
import AdminCollection from './pages/AdminCollection'
import EgBootstrap      from "./pages/EgBootstrap";

Vue.config.productionTip = false;
Vue.use(VueCookie);
Vue.use(VueRouter);
Vue.use(BootstrapVue);



// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.

// 1. Define route components.
// These can be imported from other files
const RawComponent = {template: '<h1>RC: {{ $route.params.someString }}</h1>'};

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
	routes: [
		{path: '/', component: EgBootstrap},
		{path: '/egBootstrap', component: EgBootstrap},
		{path: '/adminmodel', component: AdminModel},
		{path: '/admincollection', component: AdminCollection},
		{path: '/admincollection/:collectionName', component: AdminCollection},
		{path: '/rawcomponent/:someString', component: RawComponent},
		{path: '/rawcomponent/*', component: RawComponent}
	] // short for `routes: routes`
});

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
new Vue({
	      el:     '#app',
	      render: h => h(App),
	      router: router
      })
      //	.$mount('#app')
;

// Now the app has started!
