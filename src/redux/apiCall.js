import { publicRequest } from "../requestMethod"
import { loginFailed, loginStart, loginSuccess } from "./userReducer"

export const login=async(dispatch,user)=>{
   dispatch(loginStart())
   try{
       const res=await publicRequest.post("/auth/login",user)
       dispatch(loginSuccess(res.data))
   }catch(err){
       dispatch(loginFailed())
   }
}