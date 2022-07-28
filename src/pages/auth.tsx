import React from "react";
import { useInput } from "../hook/input";
import { useAppDispatch } from "../hook/redux";
import { register, login } from "../store/actions/authActions";
import {useNavigate} from "react-router-dom";



export function Auth(){
    const username = useInput('')
    const password = useInput('')
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const isFormValid = () =>username.value && password.value

    const loginHandler =(event: React.FormEvent) => {
        event.preventDefault()
        if (isFormValid()) {
            dispatch(login({username: username.value, password: password.value})).then(()=>{
                navigate('/')
            })
        } else {
          alert('Войти')
        }
      }

    const sumbitHandler=async (event: React.FormEvent)=>{
        try{
            event.preventDefault()

            if(isFormValid()){
                await dispatch(register({username: username.value, password: password.value})).then(()=>{
                    
                })
                navigate('/')
            }else{
                alert('Заполните форму')
            }

        }catch(e){

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
            <button onClick={sumbitHandler} className="py-2 px-4 bg-blue-700 boder text-white" >Регистрация</button>
            <button onClick={loginHandler} className="py-2 px-6 bg-blue-700 boder text-white" >Вход</button>
        </form>
    )
}