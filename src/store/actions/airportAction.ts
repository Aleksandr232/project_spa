import { AppDispatch } from "../index"
import { ServerResponse, IAirport } from "../../models/models"
import axios from "../../axios"
import {airportSlice} from "../slices/airoportSlice"

export const fetchAirports=()=>{
    return async(dispatch: AppDispatch )=>{
        try{
          dispatch(airportSlice.actions.fetching())
          const response =  await axios.get<ServerResponse<IAirport>>('airports')
          dispatch(airportSlice.actions.fetchSuccess(
            response.data.results
          ))
        
        }catch(e){
          dispatch(airportSlice.actions.fetchError(e as Error))
        }
    }
}