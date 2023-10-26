// import Vue from 'vue'
import VueRouter from "vue-router"

import LoginPage from "../views/Login"
import HomePage from "../views/Home"
import RegisterPage from "../views/Register"

// Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        redirect: "/login"
    },
    {
        path: "/home",
        component: HomePage,
        meta: {
            title: "Home"
        }
    },
    {
        path: "/login",
        component: LoginPage,
        meta: {
            title: "Login"
        }
    },
    {
        path: "/register",
        component: RegisterPage,
        meta: {
            title: "Register"
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.afterEach((to) =>{
    if(to.meta.title) {
        document.title = to.meta.title;
    }
})

export default router
