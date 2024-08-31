import axios from "axios"

const apiInstance = axios.create({
    baseURL: "https://dummyjson.com/todos"
})

export default apiInstance;
