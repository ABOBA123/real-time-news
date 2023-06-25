import axios from "axios"
export const register = async({email, password})=>{
    const {data} = await axios.post("http://localhost:8080/api/user/register", {email, password})
    return data
}
export const login = async({email, password})=>{
    const {data} = await axios.post("http://localhost:8080/api/user/login", {email, password})
    return data
}