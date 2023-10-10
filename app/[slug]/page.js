
import { collection, getDocs, doc, where, query, limit} from "firebase/firestore"
// import { useState, useEffect} from "react"
import { db } from "@/utils/firebase"
import Image from "next/image"
import bgBali from "../../public/images/bandara/DPS.jpg"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import ClientComponent from "./client-component"

async function getData(slug, origin, terminal) {
    // console.log(origin)
    const url = slug+terminal+"/"+origin
    // console.log(url)
    const res = await fetch(url, {cache: 'no-store'})
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    
    return res.json()
}

async function getBandara(slug) {
    const col = collection(db, "bandara")
    const q = query(col, where("code", "==", slug), limit(1))
    const querySnapshot = getDocs(q)
    const data = await querySnapshot.then((snapshot)=>{
        let burl = {}
        snapshot.docs.forEach((doc)=>{
            burl = doc.data()
        })
        return burl
    })
    return data
}
export default async function Page(params) {
    // console.log(params.searchParams)
    let bandaradata = {}
    let data = {}
    if(params.searchParams){
        bandaradata = await getBandara(params.params.slug)
        data = await getData(bandaradata.url, params.searchParams.origin, params.searchParams.terminal)
        // console.log(bandaradata.url)
    }else{
        bandaradata = await getBandara(params.params.slug)
        data = await getData(bandaradata.url, "domestic", "dept")
    }
    // console.log(bandaradata.url)
    return (
        <> 
            <div className="w-full">
                <div className="w-full relative">
                    <div className="relative">
                        <Image src={bgBali} className="w-full h-48" style={{objectFit: 'cover'}} alt="Bali"/>
                    </div>
                    <div className="absolute top-0 w-full h-full">
                        <div className="w-80 h-full flex flex-col justify-center mx-auto">
                            <h1 className="w-80 text-white text-2xl font-semibold">{bandaradata.name + "("+bandaradata.code+")"}</h1>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-80 bg-white rounded-2xl mx-4 absolute top-40 p-4">
                        <h2 className="text-slate-800 text-base font-semibold mb-4">Flight Menu</h2>
                        <form className="flex flex-col">
                            <Select name="origin" defaultValue={params.searchParams.origin? params.searchParams.origin: "domestic"}>
                                <SelectTrigger className="w-72 mb-4">
                                    <SelectValue placeholder="Select a flight"/>
                                </SelectTrigger>
                                <SelectContent>
                                <SelectItem value="domestic">Domestic</SelectItem>
                                <SelectItem value="international">International</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select name="terminal" defaultValue={params.searchParams.terminal? params.searchParams.terminal: "dept"}>
                                <SelectTrigger className="w-72 mb-4">
                                    <SelectValue placeholder="Select terminal"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="arr">Arrival</SelectItem>
                                    <SelectItem value="dept">Departure</SelectItem>
                                </SelectContent>
                            </Select>
                            <button type="submit" className="w-72 h-10 bg-violet-300 rounded-lg text-slate-800 text-base font-semibold">Search</button>
                        </form>
                    </div>
                
                </div>
                <ClientComponent params={[data.data, {terminal : params.searchParams.terminal, search: params.searchParams.flightSearch}]}/>
            </div>
        </>
    )
}