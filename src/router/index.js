import Vue from 'vue'
import VueRouter from 'vue-router'

import Været from '../views/Været.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter);

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/Været',
      name: 'Været',
      component: Været
    }
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;