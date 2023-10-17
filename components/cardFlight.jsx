"use client"
import Image from "next/image"
import Plane from "./planeSvg"

import { getDownloadURL, ref } from "firebase/storage"
import { storage } from "@/utils/firebase"
import { useState, useEffect } from "react"


function Status(stat) {
    const red = ['LATE ARRIVAL', 'GATE CLOSE', 'LAST CALL', 'BOARDING', 'DEPARTED', 'CHECK IN CLOSE']
    const yellow = ['TO WAITING ROOM', 'CHECK IN OPEN', 'SECOND CALL']
    const green = ['SCHEDULED', 'LANDED']
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
        if(stat.stat === 'LANDED'){
            return (
                <span className="col-span-4 px-2 py-1 bg-emerald-300 rounded-lg text-white text-xs font-medium ml-auto animate-pulse">{stat.stat}</span>
            )
        }else{
            return (
                <span className="col-span-4 px-2 py-1 bg-emerald-300 rounded-lg text-white text-xs font-medium ml-auto">{stat.stat}</span>
            )
        }
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



function Speech(params, terminal) {
    // console.log(params);

    let op = ""
    for (const x of idFlight) {
        if (x.id == params.operator){
            op = x.actual
        }
    }
    let textId = ""
    let textEn = ""
    if(terminal === "arr"){
        textId = `Perhatian perhatian! Pesawat udara, ${op} dengan nomor penerbangan ${params.flightno}, dari ${params.fromtolocation}, telah mendarat. Terimakasih.`
        textEn = `Your attention please, ${op}, on flight number ${params.flightno} from ${params.fromtolocation} has just landed. Thank you`
    }else{
        textId = `Perhatian perhatian. Pesawat udara, ${op}, dengan nomor penerbangan, ${params.flightno}, tujuan, ${params.fromtolocation}, dipersilahkan naik ke pesawat udara melalui pintu nomor, ${params.gatenumber}. Terimakasih`
        textEn = `Your attention please, ${op}, passengers, on flight number, ${params.flightno}, leaving for, ${params.fromtolocation}, please board to the aircraft immediately to gate number, ${params.gatenumber}. Thank you`
    }
    console.log(textId)
    const synth = window.speechSynthesis
    const voices = synth.getVoices()
    // for (let i = 0; i < voices.length; i++) {
    //     if (voices[i].lang ==="id-ID") {
    //         console.log(voices[i])
    //         console.log(i)
    //     }
    // }
    const utternace = new SpeechSynthesisUtterance(textId)
    // 159, 160 <== id-ID microsoft edge
    // 11 <== chrome
    utternace.voice = voices[11] //id-ID Chrome
    utternace.lang= "id-ID"
    utternace.pitch = 1
    utternace.rate = 0.9
    synth.speak(utternace)
    // window.speechSynthesis.speak(utternace)
}



export default function Cardflight(props) {
    // console.log(props.props[1].terminal)
    function clickHandle() {
        Speech(props.props[0], props.props[1].terminal)
    }

    // const f = firebaseStorage(props.props[0].operator)

    const [logo, setLogo] = useState("")

    useEffect(()=>{
        const file = props.props[0].operator + ".png"
        const storageRef = ref(storage, 'aircraft')
        getDownloadURL(ref(storageRef, file)).then((url)=>{
            setLogo(url)
        }).catch((err)=>{
            const num = props.props[0].flightno
            
            const file = num.slice(0,2) + ".png"
            getDownloadURL(ref(storageRef, file)).then((url)=>{
                setLogo(url)
            })
        })
        
    },[])

    return(
        <>
            <div className="w-80 md:w-96 relative bg-white rounded-2xl shadow p-4" onClick={clickHandle}>
                <div className="flex justify-between mb-2">
                    <div className="flex gap-x-2 items-center">
                        <div className="object-cover w-12 h-5 relative">
                            <Image src={logo} fill={true} loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt={props.props[0].operator}/>
                        </div>
                        <span className="text-slate-800 text-xl font-semibold">{props.props[0].flightno}</span>    
                    </div>
                    <div className="flex items-center">
                        <box-icon type='solid' name='watch' color='#7088f1'></box-icon>
                        {/* <span className="text-indigo-400 text-xs font-medium">{waktu(props.props[0].schedule, props.props[0].estimate)}</span> */}
                        <span className="text-indigo-400 text-xs font-medium">{props.props[1].terminal === "arr" ? props.props[1].actual ? Jam(props.props[0].actual) : Jam(props.props[0].estimate) : Jam(props.props[0].schedule)}</span>
                    </div>
                </div>
                {/* <div className="flex justify-between mt-2">
                    <span className="text-slate-800 text-xs font-normal">{Jam(props.props[0].schedule)}</span>
                    <span className="text-slate-800 text-xs font-normal">{props.props[0].estimate ? Jam(props.props[0].estimate) : "-"}</span>
                </div> */}
                <div className="grid sm:grid-cols-7 grid-cols-5">
                    <div className="flex flex-col text-left sm:col-span-2">
                        <span className="text-slate-800 text-lg font-semibold">{props.props[1].terminal === "arr" ? props.props[0].fromto : props.props[0].airportcode}</span>
                    </div>
                    <Plane/>
                    <div className="flex flex-col text-right sm:col-span-2">
                        <span className="text-slate-800 text-lg font-semibold">{props.props[1].terminal === "arr" ? props.props[0].airportcode : props.props[0].fromto}</span>
                    </div>
                </div>
                <div className="flex justify-between mb-2">
                    <span className="text-indigo-400 text-xs font-medium text-left max-sm:w-24">{props.props[1].terminal === "arr" ? props.props[0].fromtolocation : props.props[0].airportloc}</span>
                    <span className="text-indigo-400 text-xs font-medium text-right max-sm:w-24">{props.props[1].terminal === "arr" ?props.props[0].airportloc:props.props[0].fromtolocation}</span>
                </div>
                <div className="grid grid-rows-2 w-10/12 ml-auto gap-y-2">
                    <div className="grid grid-cols-7 items-center gap-x-2">
                        <span className="col-span-2 text-left">{props.props[0].gatenumber && props.props[0].gatenumber.trim().length>0 ? "Gate" : "Belt"}</span>
                        <span className="text-center">:</span>
                        <span className="col-span-4 w-11 text-center px-2 py-1 bg-blue-500 rounded-3xl text-white text-xs font-medium ml-auto">{props.props[0].gatenumber && props.props[0].gatenumber.trim().length>0 ? props.props[0].gatenumber : props.props[0].beltnumber? props.props[0].beltnumber : "-"}</span>
                    </div>
                    <div className="grid grid-cols-7 items-center gap-x-2">
                        <span className="col-span-2 text-left">Status</span>
                        <span className="text-center">:</span>
                        <Status stat={props.props[0].flightstat}/>
                    </div>
                </div>
            </div>
        </>
    )
}