import React from "react";
import {IAirport} from '../models/models'

interface AirportCartProps{
    airport: IAirport
}


export function AirportCart({airport}: AirportCartProps){
    return(
        <div>
            {airport.name}
        </div>
    )
}