import React, { ChangeEvent, useEffect, useState } from "react";
import { useAppSelector } from "../hook/redux";
import { IFilter } from "../models/models";


export function AirportFilter(){
    const {regions, countries, loading, types} = useAppSelector(state => state.handbook)
    const [showbutton, setShowbutton] = useState(false)
    const[filter, setFilter] = useState<IFilter >({
        type:'',
        country:'',
        region:''
    })

    const isfilterEnabded=()=>{
        return filter.type || filter.region || filter.country
    }

    useEffect(()=>{
        if(isfilterEnabded()){
            setShowbutton(true)
        }else{
            setShowbutton(false)
        }
    },[filter])

    const changeHandler = (event:ChangeEvent<HTMLSelectElement>) =>{
        setFilter(prev=>({...prev, [event.target.name]: event.target.value}))
    }

    const clearFilter=()=>{
        setFilter({
            type:'',
            region:'',
            country:''
        })
    }


    if(loading) return <p className="text-center">Загрузка...</p>

    return(
        <div className="border py-2 px-4 mb-2">
            <span className="font-bold mr-2"> Фильтр</span>

            <select
                name="type" 
                className="mr-2 border py-1 px-2"
                onChange={changeHandler}
                value={filter.type}
             >
                <option value="" disabled>Тип</option>
                {types.map(t =><option key={t}>{t}</option>)}
            </select>
            <select 
                name="region"
                className="mr-2 border py-1 px-2" 
                onChange={changeHandler}
                value={filter.region}
            >
                <option value="" disabled>Регион</option>
                {regions.map(r =><option key={r}>{r}</option>)}
            </select>
            <select 
                name="country"
                className="mr-2 border py-1 px-2"
                onChange={changeHandler}
                value={filter.country}
            >
                <option value="" disabled>Страна</option>
                {countries.map(c =><option key={c}>{c}</option>)}
            </select>
             {showbutton && <button onClick={clearFilter} className="py-1 px-4 bg-red-500 text-white">&times;</button>}
        </div>
    )
}

