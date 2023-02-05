import axios from "axios";

// Define the base URL for the API

const baseURL = 'http://localhost:5000/';

const axiosClient = axios.create({
    baseURL,
    headers : {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
    },
    withCredentials : true
});

export default axiosClient;