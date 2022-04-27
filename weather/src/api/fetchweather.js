import axios from 'axios';

const URL = 'https://openweathermap.org/data/2.5/weather';
const API_Key = '3d1393770561b76e576aa6da96417dcc';
export const fetchweather = async (query) =>{
    const {data} = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_Key,
        }
    });
    return data;
}

