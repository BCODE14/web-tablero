

/**
 * @author Jackelin Marca
 * @version 1.0.0
 * @description creacion de componente - grafico de linea - utilizando Chart.js
 * @date 2025-04-29
 */

<template>

    <div>
        <h2 style="margin-top: 2rem;">grafico de liena</h2>

        <canvas ref="lineCanvas"></canvas>

    </div>

</template>

<script>

    import { Chart, registerables } from 'chart.js';
    Chart.register(...registerables)

    export default {

        name:'linegrafico',
        mounted(){

            const ctx = this.$refs.lineCanvas.getContext('2d')

            new Chart( ctx, {

                type: 'line',
                data:{

                    labels: ['ene','feb','mar','abr','may','jun','jul'],
                    datasets:[
                        {
                            label:'ventas',
                            data:[120,150,180,160,200,250,220],
                            borderColor:'#36a2eb',
                            backgroundColor:'rgba(54,162,235,0.2)',
                            tension: 0.3,
                            fill:true
                        }
                    ]

                },

                options:{

                    responsive: true,
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
