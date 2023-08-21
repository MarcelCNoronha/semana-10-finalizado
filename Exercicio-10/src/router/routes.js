import {createRouter, createWebHistory} from 'vue-router'

import About from '../views/About.vue'
import Home from '../views/Home.vue'
import Cadastro from '../views/CadastroTalento.vue'

export const routes = createRouter({
    history: createWebHistory(),
    routes: [
            {
                path: '/',
                name: 'Home',
                component: Home
            },
            {
                path: '/sobre',
                name: 'Sobre',
                component: About
            },
            {
                path: '/cadastro',
                name: 'Cadastro',
                component: Cadastro
            }
        ]
})
