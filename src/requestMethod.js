import axios from "axios";

const BaseUrl="https://rohitshop.herokuapp.com/api"
const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjQxNTMwNTY5ZWI1MmQ0OGI1NDIyOSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTQyMjQ2OTUsImV4cCI6MTY1NDQ4Mzg5NX0.1iL2a6HkUuOxGdh7Vtr7kOWNenShpwFmUe0UV99hlCk"

export const publicRequest=axios.create({
    baseURL:BaseUrl
})

export const userRequest=axios.create({
    baseURL:BaseUrl,
    headers:{token : `Bearer ${token}`} 
})

