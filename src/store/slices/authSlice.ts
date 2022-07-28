import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {IAirportType, IAirportRegion, IAirportCountry } from '../../models/models'

interface AuthState{
    access:string
    username:string
    isAuth: boolean
}

interface AuthPayload{
    access:string
    username:string
    
}

const initialState: AuthState={
  access:'',
  username:'',
  isAuth: false


}

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        login(state, action:PayloadAction<AuthPayload>){
            state.access = action.payload.access
            state.username = action.payload.username
            state.isAuth = Boolean(action.payload.access)
        }
       
    }
})


export default authSlice.reducer