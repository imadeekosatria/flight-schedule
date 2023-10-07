"use client"
import { collection, getDocs, where} from "firebase/firestore"
import { useState, useEffect } from "react"
import { db } from "./firebase"
import { useSearchParams } from 'next/navigation'


export function getBandara(slug) {
    const [bandara, setbandara] = useState([{}])
    useEffect(()=>{
        getDocs(collection(db, "bandara"), where("code", "==", slug))
        .then((snapshot)=>{
        let bandaras = []
        snapshot.docs.forEach((doc)=>{
            bandaras.push({...doc.data(), id: doc.id})
        })
        setbandara(bandaras)
        })
    },[])
    // return {bandara}
}

const searchParams = useSearchParams()
