import axios from "../../axios"
import { AppDispatch } from "../index"
import {authSlice} from "../slices/authSlice"
import { IAuth } from "../../models/models"
import { IAuthResponse } from "../../models/models"






export const register = (data: IAuth) => {
    return async (dispatch: AppDispatch) => {
      try {
        const response = await axios.post<IAuthResponse>(`auth/register`, data)
        dispatch(authSlice.actions.loginSuccess({
          access: response.data.access,
          username: data.username
        }))
      } catch (e) {
        console.log('Error register', e)
      }
    }
  }
  
  export const login = (data: IAuth) => {
    return async (dispatch: AppDispatch) => {
      try {
        const response = await axios.post<IAuthResponse>(`auth/login`, data)
        dispatch(authSlice.actions.loginSuccess({
          access: response.data.access,
          username: data.username
        }))
      } catch (e) {
        console.log('Error Login', e)
      }
    }
  }