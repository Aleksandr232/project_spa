import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    
})

export function SetUpStore(){
    return configureStore({
        reducer:rootReducer
    })
}