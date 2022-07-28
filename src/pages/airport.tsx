import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "../axios";


export function Airoport(){
    const params = useParams<'id'>()
    const [airport, setAirport] = useState([])

    async function fetcAirport(){
      const response =  await axios.get(`/airports/${params.id}`)
      console.log(response)
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