import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AiportSearch } from "../components/aiportSearch";
import { AirportCart } from "../components/airportCart";
import { AirportFilter } from "../components/airportFilter";
import { fetchAirports } from "../store/actions/airportAction";


export  function Main(){
    const dispatch = useDispatch()

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