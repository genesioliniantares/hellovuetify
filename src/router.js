import HelloWorld from "./components/HelloWorld";
import VueRouter from "vue-router";
import GreetView from "./views/GreetView";

const routes = [
    { path: '/', component: HelloWorld },
    { path: '/greet', component: GreetView}
]

const router = new VueRouter({
    routes // short for `routes: routes`
})

export default router