import axios from 'axios';

const config = {
    baseUrl: 'https://restcountries.eu/rest/v2/',
};

function getAllNations(){
    return axios.get(`${config.baseUrl}all`);
}

function getOneNation(nationCode){
    return axios.get(`${config.baseUrl}alpha/${nationCode}`);
}

export {
    getAllNations,
    getOneNation,
};