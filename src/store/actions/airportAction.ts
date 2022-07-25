import { AppDispatch } from "../index"
import { ServerResponse, IAirport } from "../../models/models"
import axios from "../../axios"
import {airportSlice} from "../slices/airoportSlice"

export const fetchAirports=(page=1, count: number = 50)=>{
    return async(dispatch: AppDispatch )=>{
        try{
          dispatch(airportSlice.actions.fetching())
          const response =  await axios.get<ServerResponse<IAirport>>('airports', {
            params:{
              count,
              page
            }
          })
          console.log(response)
          dispatch(airportSlice.actions.fetchSuccess(
            response.data.results
          ))
        
        }catch(e){
          dispatch(airportSlice.actions.fetchError(e as Error))
        }
    }
}