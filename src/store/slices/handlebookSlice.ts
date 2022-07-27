import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {IAirportType, IAirportRegion, IAirportCountry } from '../../models/models'

interface HandBookState{
    loading:boolean
    types: IAirportType[]
    regions: IAirportRegion[]
    countries: IAirportCountry[]
}




const initialState: HandBookState={
    loading:false,
    regions: [],
    countries: [],
    types: []


}

export const handbookSlice = createSlice({
    name:'handbook',
    initialState,
    reducers:{
        fetching(state){
            state.loading = true
        },
        fetchSuccess(state, action: PayloadAction){
            state.loading = false
            /* state.types = action.payload.airports */
            
        }
       
    }
})


export default handbookSlice.reducer