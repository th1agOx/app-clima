import {axios } from "axios";
import { TIMEOUT } from "dns";
import { request } from "http";

//instancia padrão
export const axiosInstance = axios.create({
    Headers: {
        "Content-Type" : "application/json",
    },
});

axiosInstance.defaults.timeout = 2500 ;

axiosInstance.get('/longRequest', {
    TIMEOUT: 5000
});

//Interceptor antes de enviar qualquer requisição
axiosInstance.interceptors.request.use( 
    (request) => {
        console.log(`[Axios][request] URL: ${request.url} | Método: ${request.method}`);
        return config;
    }, 
    (errors) => {
        console.error('[Axios][Request Error]', errors);
        return Promise.reject(errors);
    }
);

//Interceptor depois de receber a resposta 
axiosInstance.interceptors.response.use(
    (response) => {
        console.log(`[Axios][response] Sucesso:`, response.status);
        return response;
    },
    (errors) => {
        console.error();
        return Promise.reject(errors);
    }
)