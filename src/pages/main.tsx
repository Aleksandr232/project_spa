import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hook/redux";
import { AiportSearch } from "../components/aiportSearch";
import { AirportCart } from "../components/airportCart";
import { AirportFilter } from "../components/airportFilter";
import { fetchAirports } from "../store/actions/airportAction";
import ReactPaginate from 'react-paginate';


const ITEMS_PER_PAGE = 50


export  function Main(){
    const dispatch = useAppDispatch()
    const [page, setPage] =useState(1)
    const {error, loading, airports, count} = useAppSelector(state=>state.airport)

    const pageCount = Math.ceil(count / ITEMS_PER_PAGE)

    const pangeChangeHandler=({selected} : {selected: number})=>{
        /* console.log(event) */
    }


    useEffect(()=>{
        dispatch(fetchAirports(page, ITEMS_PER_PAGE))
    },[dispatch, page])

    return(
        <div className="container mx-auto max-w-[760px] pt-5">
            <AiportSearch/>

            <AirportFilter/>

            {loading && <p className="text-center text-lg">Загрузка....</p>}
            {error && <p className="text-center text-lg text-red-600">{error}</p>}

            {
                airports.map(airport => <AirportCart key={airport.id} airport={airport}/>)
            }
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={pangeChangeHandler}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    previousLabel="<"
                    containerClassName="flex"
                    pageClassName="py-1 px-2 border mr-2"
                    previousClassName="py-1 px-2 border mr-2"
                    nextClassName="py-1 px-2 border"
                    activeClassName="bg-gray-500 text-white"
                    />
        </div>
    )
}