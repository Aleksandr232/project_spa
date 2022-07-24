import React from "react";
import { AiportSearch } from "../aiportSearch";
import { AirportCart } from "../airportCart";
import { AirportFilter } from "../airportFilter";


export  function Main(){
    return(
        <div className="container mx-auto max-w-[760px] pt-5">
            <AiportSearch/>

            <AirportFilter/>

            <AirportCart/>
        </div>
    )
}