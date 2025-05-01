

/**
 * @author Jackelin Marca
 * @version 1.0.0
 * @description creacion de vista para visualizar los reportes de productos
 * @date 2025-04-29
 */


<template>

    <div class="cont">

        <h1> reporte </h1>
        <p> reporte de productos - graficas </p>

        <button @click="loadproducts">actualizar datos</button>

        <div class="conte">
           
            <productchart  v-if="productos.length" :productos="productos">
            </productchart>

            <categorychart v-if="productos.length" :productos="productos" ></categorychart>

            <linegrafico></linegrafico>

            <bonagrafico :productos="productos"></bonagrafico>

        </div>
        
    </div>

</template>

<script>

import bonagrafico from '../components/bonagrafico.vue'
import linegrafico from '../components/linegrafico.vue'
import categorychart from '../components/categorychart.vue';
import productchart from '../components/productchart.vue';
import { mapGetters,mapActions } from 'vuex';

    export default{

        name:'reportesvista',
        components:{
            productchart,
            categorychart,
            linegrafico,
            bonagrafico
        },
        computed:{

            ...mapGetters(['allproducts']),
            productos(){

                return this.allproducts

            }

        },

        methods:{
            ...mapActions(['fetchproductos']),
            loadproducts(){
                this.fetchproductos()
            }
        }

    }


</script>

<style>

    .cont{
        text-align: center;
        text-transform:uppercase;    
    }

    p::first-letter{
        text-transform:uppercase;
    }
    
    p{
        text-transform: lowercase;
        
    }

    .conte{

        display: grid;
        flex-wrap: wrap;
        justify-content:stretch;
        align-content: stretch;
        grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));

    }

</style>