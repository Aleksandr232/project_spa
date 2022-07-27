import { AppDispatch } from "../index"
import axios from "../../axios"
import {handlebookSlice} from "../slices/handlebookSlice"
import { IAirportType, IAirportCountry, IAirportRegion } from "../../models/models"

export const fetchHandbooks=()=>{
    return async(dispatch: AppDispatch )=>{
        try{
          dispatch(handlebookSlice.actions.fetching())
          const response =  await Promise.all([
                axios.get<IAirportType[]>('handbooks/airport-types'),
                axios.get<IAirportRegion[]>('handbooks/regions'),
                axios.get<IAirportCountry[]>('handbooks/countries')
          ])
          console.log(response)
          dispatch(handlebookSlice.actions.fetchSuccess({
                types: response[0].data,
                regions: response[1].data,
                countries: response[2].data
          }))
        
        }catch(e){
          
        }
    }
}