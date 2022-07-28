import axios from "../../axios"
import { AppDispatch } from "../index"


interface AuthResponse{
    access: string
    refresh: string
}

interface AuthData{
    username: string
    password: string
}

export const register=(data: AuthData)=>{
    return async(dispatch: AppDispatch )=>{
        try{
          await axios.post<AuthResponse>(`auth/register`, )
        
        }catch(e){
          console.log('error', e)
        }
    }
}