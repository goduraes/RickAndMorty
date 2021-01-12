import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Page from '../views/Page.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/episodes',
    name: 'Episodes',
    component: Page,
  },
  {
    path: '/characters',
    name: 'Characters',
    component: Page,
  },
  {
    path: '/locations',
    name: 'Locations',
    component: Page,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
