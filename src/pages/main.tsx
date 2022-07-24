import React from "react";
import { AiportSearch } from "../components/aiportSearch";
import { AirportCart } from "../components/airportCart";
import { AirportFilter } from "../components/airportFilter";


export  function Main(){
    return(
        <div className="container mx-auto max-w-[760px] pt-5">
            <AiportSearch/>

            <AirportFilter/>

            <AirportCart/>
        </div>
    )
}