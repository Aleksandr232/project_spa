import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../hook/redux";
import {authSlice} from "../store/slices/authSlice";

export function Navigation(){
    const dispatch = useAppDispatch()
    const {isAuthenticated, username} = useAppSelector(state => state.auth)

    const logoutHandler = (event: React.MouseEvent)=>{
        dispatch(authSlice.actions.logout())
    }

    return(
        <nav className="flex justify-between w-full items-center drop-shadow h-[50px] px-5 bg-gray-100">
      <h3><Link to={'/'}>Аэропорт</Link></h3>

      <div>
        {
          !isAuthenticated
            ? <Link to={'/auth'}>Авторизация</Link>
            : <>
                <span className="font-bold mr-4">{username}</span>
                <a href="#" onClick={logoutHandler}>Выйти</a>
              </>
        }
      </div>
    </nav>
    )
}