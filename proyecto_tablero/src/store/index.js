
/**
 * @author Jackelin Marca
 * @version 1.0.0
 * @description manejo del estado global de variables compartidas 
 * @date 2025-04-29
 */

import { createStore } from 'vuex'
import { getallproducts } from '../api/productos';


export default createStore({

    state:{

        productos:[]

    },

    mutations:{

        setproductos(state, productoss){

            state.productos = productoss;

        },

        addproductos(state, producto){

            state.productos.push(producto)

        }

    },

    actions:{

        async fetchproductos({ commit }){

            //aqui se coneta con la api - para simular data

            try {

                const response = await getallproducts()
                commit('setproductos', response.data)
                
            } catch (error) {
                
                console.log('error al obtener productos',error)
                console.log('mensaje error',error.message)

            }
        }
    },

    getters:{

        totalproductos: (state)=> state.productos.length,
        allproducts: (state)=> state.productos

    }

});


