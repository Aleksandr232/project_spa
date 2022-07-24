import { Dispatch } from "@reduxjs/toolkit"
import axios from "../../axios"

export const fetchAirports=()=>{
    return async(dispatch: any)=>{
        try{
          const response =  await axios.get('airports')
          console.log(response)
        }catch(e){

        }
    }
}