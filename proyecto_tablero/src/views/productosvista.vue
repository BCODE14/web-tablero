
/**
 * @author Jackelin Marca
 * @version 1.0.0
 * @description creacion de vista para visualizar los productos
 * @date 2025-04-29
 */

<template>

    <div class="cont">
        <h1> productos </h1>
        <p>lista de productos disponibles</p>
 <!-- <button @click="loadproducts"> cargar productos </button>  -->       

        <div class="grid">
            <Productcard 
                v-for="p in productos" :key="p.id"
                :productos="p"
                @add="addtocart"
            >
            </Productcard>
        </div>

<!--
        <ul v-if="productos.length">
            <li v-for="p in productos" :key="p.id">
                {{ p.title }} - {{ p.price }}

            </li>
        </ul>

        <p v-else> no hay productos</p> -->

    </div>

</template>

<script>

    import { mapGetters, mapActions } from 'vuex';
    import Productcard from '../components/productcard.vue';

    export default{

        name:'productosvista',

        components:{

            Productcard,

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
            },

            addtocart(productos){

                alert(`agregar al carrito,${productos.title}`)

            }
        },

        mounted(){ //hook que carga automaticamente los datos

            this.loadproducts()

        }



    }


</script>


<style scoped>

    .grid{

        display: grid;
        flex-wrap: wrap;
        justify-content:stretch;
        align-content: stretch;
        grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
        
    }

    
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

</style>