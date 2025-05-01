
/**
 * @author Jackelin Marca
 * @version 1.0.0
 * @description creacion de rutas de nuestro proyecto
 * @date 2025-04-29
 */

import { createRouter, createWebHistory } from 'vue-router'

import homevista from '../views/homevista.vue'
import productosvista from '../views/productosvista.vue'
import reportesvista from '../views/reportesvista.vue'

const routes =[

    {

        path:'/',
        component:homevista

    },

    {
        path:'/productos',
        component:productosvista
    },

    {
        path:'/reporte',
        component:reportesvista
    }

]

const router = createRouter({

    history: createWebHistory(),
    routes

})

export default router


