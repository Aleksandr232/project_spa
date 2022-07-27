import React, { useEffect, useState } from "react";
import { useDebounce } from "../hook/debaune";
import { useInput } from "../hook/input";
import axios from "../axios";
import { IAirport,  ServerResponse  } from "../models/models";
import { useNavigate } from "react-router-dom";




export function AiportSearch(){
    const navigate = useNavigate()
    const input = useInput('')
    const [dropdown, setDropdown]= useState(false)
    const [airports, setAirports] = useState<IAirport[]>([])
    const debounced = useDebounce<string>(input.value)

    async function SearchAirports() {
      const response = await axios.get<ServerResponse<IAirport>>(`airports`, 
      {params:
        {   
            search: debounced,
            count:10
        } 
    })
      setAirports(response.data.results)
    }

    useEffect(()=>{
        if(debounced.length > 3){
            SearchAirports().then(()=>setDropdown(true))
        }else{
            setDropdown(false)
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


             {dropdown && <ul className=" list-none absolute left-0 right-0 h-[200px] bg-red-600 top-[42px] shadow-md bg-white overflow-y-scroll">
                {
                    airports.map(airport =>(
                        <li
                         className="py-2 px-4 mb-2 hover: bg-gray-500 hover: transition-colors cursor-pointer hover: text-white"
                         key={airport.id}
                         onClick={()=>navigate(`/airport/${airport.id}`)}
                         >
                            {airport.name}
                        </li>
                    ))
                }
             </ul>}
        </div>
    )
}