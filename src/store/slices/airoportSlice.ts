import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {IAirport} from '../../models/models'

interface AiroportState{
    loading:boolean,
    error: string,
    airports:IAirport[]
}


const initialState: AiroportState={
    loading:false,
    error:"",
    airports: []
}

export const airportSlice = createSlice({
    name:'airport',
    initialState,
    reducers:{
        fetching(state){
            state.loading = true
        },
        fetchSuccess(state, acton: PayloadAction){
            
        }
    }
})