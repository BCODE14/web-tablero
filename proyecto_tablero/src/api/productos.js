

/**
 * @author Jackelin Marca
 * @version 1.0.0
 * @description simulando obtener una api rest para obtener productos
 * @date 2025-04-29
 */


import axios from 'axios'

//api-publica simulada

const API_URL='https://fakestoreapi.com/products';

export function getallproducts(){

    return axios.get(API_URL);

}
