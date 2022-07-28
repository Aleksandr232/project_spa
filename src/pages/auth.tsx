import React from "react";
import { useInput } from "../hook/input";
import { useAppDispatch } from "../hook/redux";
import { register } from "../store/actions/authActions";


export function Auth(){
    const username = useInput('')
    const password = useInput('')
    const dispatch = useAppDispatch()

    const isFormValid = () =>username.value && password.value

    const sumbitHandler=(event: React.FormEvent)=>{
        event.preventDefault()

        if(isFormValid()){
            dispatch(register({username: username.value, password: password.value}))
        }
    }

   

    return(
        <form className="container mx-auto max-w-[500px] pt-8"
            onSubmit={sumbitHandler}
        >
            <div className="mb-2">
                <label htmlFor="username" className="block">Имя пользователя</label>
                <input type="text" {...username} className="border py-1 px-2 w-full" id='username'/>
            </div>
            <div className="mb-2">
                <label htmlFor="password" className="block">Пароль пользователя</label>
                <input type="text" {...password} className="border py-1 px-2 w-full" id='username'/>
            </div>
        </form>
    )
}