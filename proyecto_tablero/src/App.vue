

/**
 * @author Jackelin Marca
 * @version 1.0.0
 * @description creacion de las pestañas de navegacion 
 * @date 2025-04-29
 */


<template>

  <div id="app">

      <nav class="nave">

        <div class="subnave">
          
        <router-link to="/" > inicio </router-link>
        <router-link to="/productos"> lista de productos </router-link>
        <router-link to="/reporte"> reporte de productos </router-link>

        </div>

      </nav>

      <router-view></router-view>

  </div>

</template>

<style>

  nav{
      padding: 1rem;
      background: #eee;
  }

  router-link{
    margin: 0 1 rem;
  }

  .nave{

    justify-content:center;
    background-color:white;

  }

  a{
   
    margin-left: 0.3rem;
    margin-right: 0.3rem;
    padding: 0.6rem;
    text-transform: capitalize;
    text-decoration: none;
    color:black;
    background-color: pink;
    border-radius: 0.3rem;
    

  }

</style>