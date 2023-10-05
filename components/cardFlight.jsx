import Image from "next/image"
import QZ from "../public/images/aircraft/QZ.png"
import ID from "../public/images/aircraft/ID.png"
import GA from "../public/images/aircraft/GA.png"
import IU from "../public/images/aircraft/IU.png"
import QG from "../public/images/aircraft/QG.png"
import TR from "../public/images/aircraft/8B.png"
import JT from "../public/images/aircraft/JT.png"
import IW from "../public/images/aircraft/IW.png"
import SJ from "../public/images/aircraft/SJ.png"
import IP from "../public/images/aircraft/IP.png"


import Plane from "./planeSvg"

function Status(stat) {
    const red = ['LATE ARRIVAL', 'GATE CLOSE', 'LAST CALL', 'BOARDING', 'DEPARTED', 'CHECK IN CLOSE']
    const yellow = ['TO WAITING ROOM', 'CHECK IN OPEN']
    const green = ['SCHEDULED']
    // console.log(stat)
    if (red.includes(stat.stat)) {
        return (
            <span className="col-span-4 px-2 py-1 animate-pulse bg-rose-500 rounded-lg text-white text-xs font-medium ml-auto">{stat.stat}</span>
        )
    }else if (yellow.includes(stat.stat)) {
        return (
            <span className="col-span-4 px-2 py-1 bg-amber-300 rounded-lg text-slate-800 text-xs font-medium ml-auto">{stat.stat}</span>
        )
    }else if(green.includes(stat.stat)){
        return (
            <span className="col-span-4 px-2 py-1 bg-emerald-300 rounded-lg text-white text-xs font-medium ml-auto">{stat.stat}</span>
        )
    }else{
        return (
            <span className="col-span-4 px-2 py-1 bg-neutral-200 rounded-lg text-neutral-600 text-xs font-medium ml-auto">{stat.stat}</span>
        )
    }
    
}

function waktu(schedule, estimate) {
    const awal = new Date(schedule)
    if (estimate){
        const akhir = new Date(estimate)
        // console.log(Date.parse(awal.getTime()))
        const diff = (akhir - awal) / 60000; //dividing by seconds and milliseconds

        const minutes = diff % 60;
        const hours = (diff - minutes) / 60;
        if (minutes < 10) {
            return `${hours} h 0${minutes} min`
        }

        return `${hours} h ${minutes} min`
    }
    return "-"
}

function Jam(props) {
    // const jam = new Date(props.props.schedule)
    // return jam.
    const time = new Date(props)

    return time.toLocaleTimeString('en-GB', {hour: "2-digit", minute: "2-digit"})
}

const idFlight = [
    {
        id: "QZ", 
        logo: QZ
    }, 
    {
        id:"ID",
        logo: ID
    }, 
    {
        id: "GA",
        logo: GA
    }, 
    {
        id: "IU",
        logo: IU
    }, 
    {
        id: "QG",
        logo: QG
    },
    {
        id:"8B",
        logo: TR
    },
    {
        id:"JT",
        logo: JT
    },
    {
        id:"IW",
        logo: IW
    },
    {
        id:"SJ",
        logo: SJ
    },
    {
        id:"IP",
        logo: IP
    }
]
function logo(id) {
    for (const x of idFlight) {
        if (x.id == id) {
            return x.logo
        }
    }
    
}


export default function Cardflight(props) {
    // waktu(props)
    return(
        <>
            <div className="w-80 md:w-96 relative bg-white rounded-2xl shadow mt-9 p-4">
                <div className="flex justify-between">
                    <div className="flex gap-x-2 items-center">
                        <Image src={logo(props.props.operator)} className="object-cover w-12 h-5"/>
                        <span className="text-slate-800 text-xl font-semibold">{props.props.flightno}</span>    
                    </div>
                    <div className="flex items-center">
                        <box-icon type='solid' name='watch' color='#7088f1'></box-icon>
                        <span className="text-indigo-400 text-xs font-medium">{waktu(props.props.schedule, props.props.estimate)}</span>
                    </div>
                </div>
                <div className="flex justify-between mt-2">
                    <span className="text-slate-800 text-xs font-normal">{Jam(props.props.schedule)}</span>
                    <span className="text-slate-800 text-xs font-normal">{props.props.estimate ? Jam(props.props.estimate) : "-"}</span>
                </div>
                <div className="grid sm:grid-cols-7 grid-cols-5">
                    <div className="flex flex-col text-left sm:col-span-2">
                        <span className="text-slate-800 text-lg font-semibold">{props.props.airportcode}</span>
                    </div>
                    <Plane/>
                    <div className="flex flex-col text-right sm:col-span-2">
                        <span className="text-slate-800 text-lg font-semibold">{props.props.fromto}</span>
                    </div>
                </div>
                <div className="flex justify-between mb-2">
                    <span className="text-indigo-400 text-xs font-medium text-left max-sm:w-24">{props.props.airportloc}</span>
                    <span className="text-indigo-400 text-xs font-medium text-right max-sm:w-24">{props.props.fromtolocation}</span>
                </div>
                <div className="grid grid-rows-2 w-10/12 ml-auto gap-y-2">
                    <div className="grid grid-cols-7 items-center gap-x-2">
                        <span className="col-span-2 text-left">Gate</span>
                        <span className="text-center">:</span>
                        <span className="col-span-4 w-11 text-center px-2 py-1 bg-blue-500 rounded-3xl text-white text-xs font-medium ml-auto">{props.props.gatenumber}</span>
                    </div>
                    <div className="grid grid-cols-7 items-center gap-x-2">
                        <span className="col-span-2 text-left">Status</span>
                        <span className="text-center">:</span>
                        <Status stat={props.props.flightstat}/>
                    </div>
                </div>
            </div>
        </>
    )
}