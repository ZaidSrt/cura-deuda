//Axios
import axios from 'axios';
//Url base
import { URL_BASE } from './BaseUrl';

export function GetPockemons() {

    const limit = 24;

    return axios.get(`${URL_BASE}pokemon?limit=${limit}`).then(response => {
        return response;
    }).catch(err => {
        return err;
    });

}

export function GetPockemonById(id) {

    return axios.get(`${URL_BASE}pokemon/${id}`).then(response => {
        return response;
    }).catch(err => {
        return err;
    });

}
