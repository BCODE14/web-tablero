

/**
 * @author Jackelin Marca
 * @version 1.0.0
 * @description creacion de vista principal - home
 * @date 2025-04-30
 */


<template>

    <div class="cont">
        <h1>Bienvenido al proyecto practico de tablero de productos</h1>
        <p class="p">
            Este proyecto práctico fue desarrollado utilizando el framework Vue.js, aplicando conocimientos clave en Vuex, Vue Router, Axios y Chart.js.
        </p>
        <p class="p">
            El objetivo principal del proyecto fue consumir datos desde una API que proporciona información de productos, los cuales se muestran en tarjetas individuales con todas sus características detalladas. Posteriormente, se generan gráficas dinámicas a partir de esta data, permitiendo visualizar de forma clara y atractiva diferentes métricas relacionadas con los productos.
        </p>
            
        <p class="p">
            Con este proyecto reforcé el manejo del estado global con Vuex, la navegación de vistas con Vue Router, la interacción con APIs usando Axios, y la visualización de datos con Chart.js, consolidando mis habilidades en desarrollo frontend moderno con Vue.js.
        </p>
    </div>

</template>

<script>

    export default{

        name:"homevista",

    }

</script>

<style >

    .cont{
        text-align: center;
        text-transform:uppercase;    
    }

    .p::first-letter{
        text-transform:uppercase;
    }
    .p{
        text-align: center;
        text-transform:lowercase;
    }

</style>