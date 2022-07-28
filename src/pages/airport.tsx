import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "../axios";
import { IAirportDetail } from "../models/models";


export function Airoport(){
    const params = useParams<'id'>()
    const [airport, setAirport] = useState<IAirportDetail | null>(null)
    const [loading, setLoading] = useState(true)

    async function fetcAirport(){
      const response =  await axios.get<IAirportDetail>(`/airports/${params.id}`)
      setAirport(response.data)
      setLoading(false)
    }

    useEffect(()=>{
        fetcAirport()
    },[])

    if(loading) return <h1 className="text-center">Загрузка....</h1>

    return(
        <div className="container mx-auto pt-5 max-w-[760px]">
            <h1 className="text-center text-2xl">{airport?.name}</h1>
            <p>{airport?.coordinates}</p>
            <p>{airport?.country}</p>
            <p>{airport?.region}</p>
        </div>
    )
}