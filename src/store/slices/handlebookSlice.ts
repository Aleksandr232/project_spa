import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {IAirportType, IAirportRegion, IAirportCountry } from '../../models/models'

interface HandBookState{
    loading:boolean
    types: IAirportType[]
    regions: IAirportRegion[]
    countries: IAirportCountry[]
}

interface HandBookPayload{
    types: IAirportType[]
    countries: IAirportCountry[]
    regions: IAirportRegion[]
}




const initialState: HandBookState={
    loading:false,
    regions: [],
    countries: [],
    types: []


}

export const handlebookSlice = createSlice({
    name:'handbook',
    initialState,
    reducers:{
        fetching(state){
            state.loading = true
        },
        fetchSuccess(state, action: PayloadAction<HandBookPayload>){
            state.loading = false
            state.types = action.payload.types
            state.regions = action.payload.regions
            state.countries = action.payload.countries
        }
       
    }
})


export default handlebookSlice.reducer