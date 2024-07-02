import { createWebHistory, createRouter } from 'vue-router';
import Login from '@/components/Login.vue';
import Home from '@/components/Home.vue';
import Register from '@/components/Register.vue';
import Reservation from '@/components/Reservation.vue';
import Hairstyle from '@/components/Hairstyle.vue';
import Facial from '@/components/Facial.vue';
import Manicure from '@/components/Manicure.vue';
const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/reservation',
        name: 'Reservation',
        component: Reservation
    },
    {
        path: '/facial',
        name: 'Facial',
        component: Facial
    },
    {
        path: '/manicure',
        name: 'Manicure',
        component: Manicure
    },
    {
        path: '/hairstyle',
        name: 'Hairstyle',
        component: Hairstyle
    },
    {
        path: '/',
        redirect: '/login'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router