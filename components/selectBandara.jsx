"use client"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import submit from "@/app/action"
import { useState, useEffect } from "react"
import { collection, query, getDocs, querySnapshot, onSnapshot} from "firebase/firestore"
import {db} from "@/utils/firebase"



export default function SelectBandara({bandara}) {
    const [newBandara, setnewBandara] = useState(bandara)
    // useEffect(()=>{
    //     getDocs(collection(db, "bandara"))
    //     .then((snapshot)=>{
    //     let bandaras = []
    //     snapshot.docs.forEach((doc)=>{
    //         bandaras.push({...doc.data(), id: doc.id})
    //     })
    //     setnewBandara(bandaras)
    //     })

    // },[])
    return (
        <div className="w-fit h-full">
              <h1 className="text-slate-800 text-2xl font-semibold w-60 mb-4">Find your flight schedule</h1>
              <form className="w-80 rounded bg-white p-4 flex flex-col gap-y-4" action={submit}>
                <h2 className="text-slate-800 text-base font-semibold">Select Airport</h2>
                <Select name="airport">
                  <SelectTrigger className="w-72">
                    <SelectValue placeholder="From"/>
                  </SelectTrigger>
                  <SelectContent>
                    {newBandara.map((bandara)=>{
                      return <SelectItem key={bandara.code} value={bandara.code}>{bandara.name}</SelectItem>
                    })}
                  </SelectContent>
                </Select>
                <button type="submit" className="mt-4 w-72 h-10 bg-violet-300 rounded-lg text-slate-800 text-base font-semibold">Search</button>
              </form> 
        </div>
    )   
} 