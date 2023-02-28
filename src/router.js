import { createRouter,createWebHistory } from "vue-router";
import Home from '@/components/Home.vue'
import Event from '@/components/Event.vue'

const routes = [
    {
        name:'Home',
        path:'/',
        component:Home
    },
    {
        name:'Event',
        path:'/event',
        component:Event
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;