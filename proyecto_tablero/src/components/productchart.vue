
/**
 * @author Jackelin Marca
 * @version 1.0.0
 * @description creacion de componente - grafico de barras - utilizando Chart.js
 * @date 2025-04-29
 */

<template>

    <div>
        <h2 style="margin-top: 2rem;"> grafico de precios </h2>

        <canvas ref="chartCanvas"></canvas>

    </div>


</template>

<script>

    import { Chart, registerables} from 'chart.js'

    Chart.register(...registerables)

    export default{

        name:'productchart',
        props:{

            productos:{

                type:Array,
                required:true

            }

        },

        mounted(){

            const ctx = this.$refs.chartCanvas.getContext('2d')
            new Chart( ctx, {

                type:'bar',
                data:{

                    labels: this.productos.map(p=>p.title.slice(0,10)+'...'),
                    datasets:[

                        {

                            label: 'precio de productos',
                            data: this.productos.map(p => p.price),
                            backgroundColor:'#42b983'

                        }

                    ]

                },

                options:{
                    responsive: true,
                    scale:{
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


<style>




</style>