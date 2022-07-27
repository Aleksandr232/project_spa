import React, { ChangeEvent, useState } from "react";
import { useAppSelector } from "../hook/redux";
import { IFilter } from "../models/models";


export function AirportFilter(){
    const {regions, countries, loading, types} = useAppSelector(state => state.handbook)
    const[filter, setFilter] = useState<IFilter >({
        type:'',
        country:'',
        region:''
    })

    const changeHandler = (event:ChangeEvent<HTMLSelectElement>) =>{
        setFilter(prev=>({...prev, [event.target.name]: event.target.value}))
    }


    if(loading) return <p className="text-center">Загрузка...</p>

    return(
        <div className="border py-2 px-4 mb-2">
            <span className="font-bold mr-2"> Фильтр</span>

            <select
                name="types" 
                className="mr-2 border py-1 px-2"
                onChange={changeHandler}
                value={filter.type}
             >
                <option value="" disabled>Тип</option>
                {types.map(t =><option key={t}>{t}</option>)}
            </select>
            <select 
                name="regions"
                className="mr-2 border py-1 px-2" 
                onChange={changeHandler}
                value={filter.region}
            >
                <option value="" disabled>Регион</option>
                {regions.map(r =><option key={r}>{r}</option>)}
            </select>
            <select 
                name="countries"
                className="mr-2 border py-1 px-2"
                onChange={changeHandler}
                value={filter.country}
            >
                <option value="" disabled>Страна</option>
                {countries.map(c =><option key={c}>{c}</option>)}
            </select>
        </div>
    )
}

