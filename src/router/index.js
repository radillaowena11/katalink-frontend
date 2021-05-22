import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Base from '../views/Base.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import LinkList from '../views/LinkList.vue'


Vue.use(VueRouter)

  const routes = [
    {
      path: "/",
      name: "Base",
      components: { default: Base },
    },
    {
      path: "/login",
      name: "Login",
      components: { default: Login },
    },
    {
      path: "/register",
      name: "Register",
      components: { default: Register },
    },
    {
      path: "/home",
      name: "Home",
      components: { default: Home },
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: "/linklist",
      name: "LinkList",
      components: { default: LinkList },
      meta: {
        requiresAuth: true,
      }
    },
  ];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
