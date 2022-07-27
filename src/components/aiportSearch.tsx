import React, { useEffect } from "react";
import { useDebounce } from "../hook/debaune";
import { useInput } from "../hook/input";
import axios from "../axios";
import { IAirport,  ServerResponse  } from "../models/models";




export function AiportSearch(){
    const input = useInput('')
    const debounced = useDebounce<string>(input.value)

    async function SearchAirports() {
      const response = await axios.get<ServerResponse<IAirport>>(`airports`, {params:{search: debounced}})
      console.log(response.data);
    }

    useEffect(()=>{
        if(debounced.length > 3){
            SearchAirports()
        }
        console.log('debounced', debounced)
    }, [debounced])

    

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