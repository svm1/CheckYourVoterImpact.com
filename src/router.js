import Vue from "vue";
import Router from "vue-router";
import Results from './Results.vue'

Vue.use(Router);
 
export default new Router({
  // get rid of the hash (#) in Url
  // the hash (#) helps the page not to be reloaded when the URL changes
  mode: "history",
  routes: [
      {
          path: "/",
          name: 'app',
          alias: '/App.vue',
          component: app
      },
      {
          path: '/Results.vue/:id',
          name: 'results',
          component: Results
      }
    ]
});