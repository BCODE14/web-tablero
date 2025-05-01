
/**
 * @author Jackelin Marca
 * @version 1.0.0
 * @description creacion de componente - grafico circular por categorias - utilizando Chart.js
 * @date 2025-04-29
 */

<template>

    <div>

        <h2 style="margin-top: 2rem;"> productos por categoria </h2>
        <canvas ref="categoryCanvas"></canvas>

    </div>

</template>

<script>

    import { Chart, registerables } from 'chart.js';
    Chart.register(...registerables)

    export default{

        name:'categorychart',
        props:{
            productos:{

                type: Array,
                required:true

            }
            
        },

        mounted(){

            const categorycounts = {}

            this.productos.forEach(p=>{

                categorycounts[p.category] = (categorycounts[p.category] || 0 ) + 1

          })

          const labels = Object.keys(categorycounts)
          const data = Object.values(categorycounts)

          const ctx = this.$refs.categoryCanvas.getContext('2d')
          new Chart( ctx,{ 
                    
                    type:'pie',
                    data:{

                        labels:labels,
                        datasets:[{
                            label:'productos por categoria',
                            data:data,
                            backgroundColor:['#ff6384','#36a2eb','#ffce56','#4caf50']

                        }]

                    },

                    options:{

                        responsive:true,
                        scales:{
                            y:{
                                beginAtZero:true
                            }
                        }

                    }

            }
          )

        }

    }



</script>