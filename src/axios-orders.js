import axios from "axios";

const instance = axios.create({
    baseURL: 'https://burger-builder-a0d3b-default-rtdb.firebaseio.com/',
});


export default instance;