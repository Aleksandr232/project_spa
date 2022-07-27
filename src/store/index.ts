import { combineReducers, configureStore } from "@reduxjs/toolkit";
import airportReducer from './slices/airoportSlice'
import handlebookReducer from "./slices/handlebookSlice";

const rootReducer = combineReducers({
    airport: airportReducer,
    handbook: handlebookReducer
})

export function SetUpStore(){
    return configureStore({
        reducer:rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof SetUpStore>
export type AppDispatch = AppStore['dispatch']