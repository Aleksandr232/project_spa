import { combineReducers, configureStore } from "@reduxjs/toolkit";
import airportReducer from './slices/airoportSlice'

const rootReducer = combineReducers({
    airport: airportReducer
})

export function SetUpStore(){
    return configureStore({
        reducer:rootReducer
    })
}