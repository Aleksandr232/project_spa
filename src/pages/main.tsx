import { useEffect } from "react";
import { useAppDispatch } from "../hook/redux";
import { AiportSearch } from "../components/aiportSearch";
import { AirportCart } from "../components/airportCart";
import { AirportFilter } from "../components/airportFilter";
import { fetchAirports } from "../store/actions/airportAction";


export  function Main(){
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(fetchAirports())
    },[])

    return(
        <div className="container mx-auto max-w-[760px] pt-5">
            <AiportSearch/>

            <AirportFilter/>

            <AirportCart/>
        </div>
    )
}