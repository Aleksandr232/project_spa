import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {IAirportType, IAirportRegion, IAirportCountry } from '../../models/models'

interface AuthState{
    access:string
    username:string
}

interface AuthPayload{
    access:string
    username:string
}

const initialState: AuthState={
  access:'',
  username:''


}

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        login(state, action:PayloadAction<AuthPayload>){
            state.access = action.payload.access
            state.username = action.payload.username
        }
       
    }
})


export default authSlice.reducer