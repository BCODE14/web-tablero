
/**
 * @author Jackelin Marca
 * @version 1.0.0
 * @description creacion de componente - grafico de bonas - utilizando Chart.js
 * @date 2025-04-29
 */

<template>

    <div>

        <h2>grafico de donas</h2>
        <canvas ref="doughnutCanvas"></canvas>

    </div>

</template>

<script>

        import { Chart, registerables } from 'chart.js';
        Chart.register(...registerables)

        export default {

                    name:'bonagrafico',
                    props:{
                        productos:{
                            type:Array,
                            required: true
                        }
                    },

                mounted(){

                    const categorycounts = {}

                    this.productos.forEach(
                        p => {
                            categorycounts[p.category] = (categorycounts[p.category] || 0) + 1
                        })

                        const labels = Object.keys(categorycounts);
                        const data = Object.values(categorycounts);

                        const ctx = this.$refs.doughnutCanvas.getContext('2d')

                        new Chart( ctx, {

                            type: 'doughnut',
                            data:{

                                labels:labels,
                                datasets:[{
                                data: data,
                                backgroundColor:[
                                    '#FF6384', '#36A2EB', '#FFCE56', '#4CAF50',
                                    '#9C27B0', '#FF5722', '#03A9F4']
                            }]

                        },
                        options:{
                                    resonsive:true
                                  } 
                        }
                        )
                }
        }
        

</script>

