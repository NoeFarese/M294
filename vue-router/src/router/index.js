import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "@/views/AboutView.vue";
import TopSecretView from "@/views/TopSecretView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: HomeView
        },
        {
            path: '/about',
            component: AboutView
        },
        {
            path: '/secret',
            component: TopSecretView,
            beforeEnter: (to, from, next) => {
                const currentDate = new Date();
                const currentMinutes = currentDate.getMinutes();
                const evenMinutes = currentMinutes % 2 === 0;

                if (evenMinutes) {
                    console.log('Zugriff erlaubt')
                    next()
                } else {
                    console.log('ZUGRIFF VERWEIGERT!')
                    next('/')
                }
            }
        }
    ]
})

export default router
