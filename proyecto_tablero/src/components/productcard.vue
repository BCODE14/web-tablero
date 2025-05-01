

/**
 * @author Jackelin Marca
 * @version 1.0.0
 * @description creacion de componente - card para la visualizacion de componente
 * @date 2025-04-29
 */

<template>

    <div class="card">
        <img :src="productos.image" alt="imagen del producto"/>
        <h2>{{ productos.title }}</h2>
        <p class="price"> ${{ productos.price }}</p>
        <button @click="$emit('add',productos)">agregar al carrito</button>

    </div>

</template>

<script>

    export default {

        name: 'productcard',
        props:{

            productos:Object

        }

    }
</script>

<style>

    .card{

        border: 1px solid #add;
        border-radius: 8px;
        padding: 1rem;
        text-align: center;
        width: 200px;
        margin: 1rem;
        box-shadow: 0 2px 6px rgba(0,0,0, 0.1);

    }

    img{
        width: 100px;
        height: 100px;
        object-fit: contain;

    }

    .price{

        font-weight: bold;
        margin: 0.5rem 0;

    }

    button{

        background-color: #42b983;
        color: white;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 4px;
        cursor: pointer;

    }

    button:hover{

        background-color: #369f6e;
    }

</style>