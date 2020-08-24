import axios from "axios";

const Api = axios.create({
    baseURL: "http://localhos:4000",
});

export default Api;
