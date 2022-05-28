import axios from "axios";

const BaseUrl="https://rohitshop.herokuapp.com/api"
const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjQxNTZjNTY5ZWI1MmQ0OGI1NDIyYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzQxODQzNiwiZXhwIjoxNjUzNjc3NjM2fQ.yiH15GnVNRlJs2wrlay2fHRyZIqPqT55DSlw-Ck0pu4"

export const publicRequest=axios.create({
    baseURL:BaseUrl
})

export const userRequest=axios.create({
    baseURL:BaseUrl,
    headers:{token : `Bearer ${token}`} 
})

