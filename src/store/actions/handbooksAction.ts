import { AppDispatch } from "../index"
import axios from "../../axios"
import handlebookSlice from "../slices/handlebookSlice"
import { IAirportType, IAirportCountry, IAirportRegion } from "../../models/models"

export const fetchHandbooks=(page=1, count: number = 50)=>{
    return async(dispatch: AppDispatch )=>{
        try{
          dispatch(handlebookSlice.actions.fetching())
          const data =  await Promise.all([
                axios.get<IAirportType[]>('handbooks/airport-types'),
                axios.get<IAirportRegion[]>('handbooks/regions'),
                axios.get<IAirportCountry[]>('handbooks/countries')
          ])
          console.log(data)
         /*  dispatch(handlebookSlice.actions.fetchSuccess({
            airports: response.data.results,
            count: response.data.count
          })) */
        
        }catch(e){
          
        }
    }
}