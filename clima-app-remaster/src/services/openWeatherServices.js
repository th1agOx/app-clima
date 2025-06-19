import { axiosInstance } from "./axiosConfig";

const API_KEY = '6b1cc5572fb6573143caa44d1503dc1f'
const baseURL = 'https://openweathermap.org/data/2.5';

export async function fetchWeatherByCity(city) {
    try {
        const response = await axiosInstance.get(`${baseURL}/weather`, {
            params: {
                q: city,
                appid: API_KEY,
                units: 'metric',
                lang: 'pt-br',
            },
        });
        return response.data;
    } catch(error) {
        throw error;
    }
}

//	Precisa criar manualmente com AbortController