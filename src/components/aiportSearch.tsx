import React, { useEffect } from "react";
import { useInput } from "../hook/input";


export function AiportSearch(){
    const input = useInput('')

    useEffect(()=>{
        if(input.value.length > 3){
            
        }
    }, [input.value])

    return(
        <div className="mb-4 relative">
            <input type="text"
             className="boreder py-2 px-4 mb-4 outline-0 w-full h-[42px]"
             placeholder="Найти..."
             {...input}
             />


            {/*  <div className="absolute left-0 right-0 h-[200px] bg-red-600 top-[42px] shadow-md">

             </div> */}
        </div>
    )
}