import { combineReducers, configureStore } from "@reduxjs/toolkit";
import airportReducer from './slices/airoportSlice'
import handlebookReducer from "./slices/handlebookSlice";
import authSlice from "./slices/authSlice";

const rootReducer = combineReducers({
    airport: airportReducer,
    handbook: handlebookReducer,
    auth: authSlice

})

export function SetUpStore(){
    return configureStore({
        reducer:rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof SetUpStore>
export type AppDispatch = AppStore['dispatch']