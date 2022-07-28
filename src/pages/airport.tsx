import React,{useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "../axios";


export function Airoport(){
    const params = useParams<'id'>()

    async function fetcAirport(){
        await axios.get(`/airports/${params.id}`)
    }

    useEffect(()=>{
        fetcAirport()
    },[])

  

    return(
        <div className="container mx-auto pt-5 max-w-[760px]">
            <h1>Аэропорт {params.id}</h1>
        </div>
    )
}