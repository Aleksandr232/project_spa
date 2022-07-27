import React from "react";
import { useInput } from "../hook/input";


export function AiportSearch(){
    const input = useInput('')

    

    return(
        <div className="boreder py-2 px-4 mb-4">
            <input type="text"
             className="boreder py-2 px-4 mb-4 outline-0 w-full"
             placeholder="Найти..."
             {...input}
             />
        </div>
    )
}