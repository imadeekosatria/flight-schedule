import Image from "next/image"
import bgBali from "../../public/images/pexels-aron-visuals-1643130.jpg"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import Cardflight from "@/components/cardFlight"

async function getData() {
    const url = 'https://bali-airport.com/data-airline/dept/domestic'
    const res = await fetch(url)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    
    return res.json()
  }

export default async function Page({params}) {
    const data = await getData()
    // console.log(data.data)
    // waktu()
    return (
        <>
            <div>
                <div className="w-full relative">
                    <div className="relative">
                        <Image src={bgBali} className="w-full h-48" style={{objectFit: 'cover'}}/>
                    </div>
                    <div className="absolute top-0 w-48 mx-8 h-full flex items-center">
                        <h1 className="text-white text-2xl font-semibold">Ngurah Rai (DPS)</h1>
                    </div>
                </div>
                <div className="w-80 bg-white rounded-2xl mx-6 absolute top-36 p-4">
                    <h2 className="text-slate-800 text-base font-semibold mb-4">Flight Menu</h2>
                    <form className="flex flex-col">
                        <Select name="origin">
                            <SelectTrigger className="w-72 mb-4">
                                <SelectValue placeholder="Select a flight"/>
                            </SelectTrigger>
                            <SelectContent>
                            <SelectItem value="domestic">Domestic</SelectItem>
                            <SelectItem value="internasional">International</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select name="terminal">
                            <SelectTrigger className="w-72 mb-4">
                                <SelectValue placeholder="Select terminal"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="arrival">Arrival</SelectItem>
                                <SelectItem value="departure">Departure</SelectItem>
                            </SelectContent>
                        </Select>
                        <button type="submit" className="w-72 h-10 bg-violet-300 rounded-lg text-slate-800 text-base font-semibold">Search</button>
                    </form>
                </div>
                <div className="mx-6 mt-52 ">
                    <div className="flex flex-col gap-y-6">
                        <span className="text-slate-800 text-lg text-center font-semibold">Upcoming Flights</span>
                        <div className="relative">
                            <form>
                                <label htmlFor="flightSearch" className="absolute flex items-center h-10 ml-4 gap-2">
                                    <box-icon name='search' color='#7088f1' ></box-icon>
                                </label>
                                <input type="text" name="flightSearch" className="w-80 h-10 bg-white rounded-3xl px-12 focus:outline-none placeholder:text-violet-300 placeholder:text-sm placeholder:font-medium" placeholder="Flight number/city"/>
                            </form>
                        </div>
                    </div>
                    {data.data.map((flightstat) =>(
                        // console.log(aircraft)
                        <Cardflight props={flightstat}/>
                    ))}
                </div>
            </div>
        </>
    )
}