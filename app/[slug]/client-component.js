"use client"
import { useState} from "react"
import Cardflight from "@/components/cardFlight"


export default function ClientComponent({params}) {
    // console.log(params)
    const [query, setQuery] = useState('')
    const data = params[0]

    const inputHandler = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault()
        } 
        setQuery(e.target.value)
    }
    return(
        <>
            <div className="flex flex-col max-sm:items-center mt-52 ">
                <div className="flex flex-col gap-y-6 items-center">
                    <span className="text-slate-800 text-lg text-center font-semibold">Upcoming Flights</span>
                    <div className="relative">
                        <form onSubmit={e => e.preventDefault()}>
                            <label htmlFor="flightSearch" className="absolute flex items-center h-10 ml-4 gap-2">
                                <box-icon name='search' color='#7088f1' ></box-icon>
                            </label>
                            <input type="text"  onChange={inputHandler} name="flightSearch" className="w-80 h-10 bg-white rounded-3xl px-12 shadow-2xl focus:outline-none placeholder:text-violet-300 placeholder:text-sm placeholder:font-medium" placeholder="Flight number/city"/>
                        </form>
                    </div>
                </div>
                <div className="flex flex-wrap gap-4 justify-center mt-9">
                    {data.filter((el)=>{
                        return query.toLowerCase() === ''? el
                        : 
                        Object.keys(el).some((p)=>{
                            
                            if (el[p] !== null) {
                                if (el[p].toLowerCase().includes(query)) {
                                    
                                    
                                    return el[p].toString().toLowerCase().includes(query)
                                }
                                
                            }
                        })
                        
                    }).map((flightstat) =>(
                        // console.log(aircraft)
                        <Cardflight key={flightstat.flightno} props={[flightstat, params[1]]}/>
                    ))}
                    
                </div>
            </div>
        </>
    )
}