import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hook/redux";
import { AiportSearch } from "../components/aiportSearch";
import { AirportCart } from "../components/airportCart";
import { AirportFilter } from "../components/airportFilter";
import { fetchAirports } from "../store/actions/airportAction";


export  function Main(){
    const dispatch = useAppDispatch()
    const {error, loading, airports} = useAppSelector(state=>state.airport)

    useEffect(()=>{
        dispatch(fetchAirports())
    },[])

    return(
        <div className="container mx-auto max-w-[760px] pt-5">
            <AiportSearch/>

            <AirportFilter/>

            {loading && <p className="text-center text-lg">Загрузка....</p>}

            {
                airports.map(airport => <AirportCart key={airport.id} airport={airport}/>)
            }
        </div>
    )
}