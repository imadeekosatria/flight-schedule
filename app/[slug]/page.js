
import { collection, getDocs, doc, where, query, limit} from "firebase/firestore"
// import { useState, useEffect} from "react"
import { getDownloadURL, ref } from "firebase/storage"
import { db, storage } from "@/utils/firebase"
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
import Footer from "@/components/footer"
import ScrollUpButton from "@/components/scroollUp"


export async function getData(slug, origin, terminal) {
    // console.log(origin)
    const url = slug+terminal+"/"+origin
    // console.log(url)
    const res = await fetch(url, { next: { revalidate: 3600 } })
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
    let bandaradata = await getBandara(params.params.slug)
    let data
    if(params.searchParams){
        data = await getData(bandaradata.url, params.searchParams.origin, params.searchParams.terminal)
        // console.log(bandaradata.url)
    }else{
        data = await getData(bandaradata.url, "domestic", "dept")
    }
    // console.log(bandaradata.url)
    const file = params.params.slug + ".jpg"
    const storageRef = ref(storage, 'bandara')
    const bg =  await getDownloadURL(ref(storageRef, file)).then((url)=>{
        return url
    })

    return (
        <> 
            <div className="w-full">
                <div className="w-full relative">
                    <div className="relative w-full h-48">
                        <Image src={bg} fill={true} priority={true} className="object-cover brightness-50" alt={bandaradata.name}/>
                    </div>
                    <div className="absolute top-0 w-full h-full">
                        <div className="w-80 h-full flex flex-col justify-center mx-auto">
                            <h1 className="w-80 text-white text-2xl font-semibold">{bandaradata.name + "("+bandaradata.code+")"}</h1>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-80 bg-white rounded-2xl mx-4 absolute top-40 p-4 shadow-2xl">
                        <h2 className="text-slate-800 text-base font-semibold mb-4">Flight Menu</h2>
                        <form className="flex flex-col">
                            <Select name="origin" defaultValue={params.searchParams.origin? params.searchParams.origin: "domestic"}>
                                <SelectTrigger className="w-72 mb-4" aria-label="Schedule from select">
                                    <SelectValue placeholder="Select a flight schedule from"/>
                                </SelectTrigger>
                                <SelectContent>
                                <SelectItem value="domestic">Domestic</SelectItem>
                                <SelectItem value="international">International</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select name="terminal" defaultValue={params.searchParams.terminal? params.searchParams.terminal: "dept"}>
                                <SelectTrigger className="w-72 mb-4" aria-label="Terminal select">
                                    <SelectValue placeholder="Select terminal"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="arr">Arrival</SelectItem>
                                    <SelectItem value="dept">Departure</SelectItem>
                                </SelectContent>
                            </Select>
                            <button type="submit" aria-label="Search Button" className="w-72 h-10 bg-violet-300 rounded-lg text-slate-800 text-base font-semibold">Search</button>
                        </form>
                    </div>
                
                </div>
                <ClientComponent params={[data.data, {terminal : params.searchParams.terminal, search: params.searchParams.flightSearch, time_zone: bandaradata.time_zone}]}/>
            </div>
            <ScrollUpButton/>
            <Footer/>
        </>
    )
}

export async function generateMetadata({ params}, parent) {
    // read route params
    const id = params
    // fetch data
    const bandara = await getBandara(id.slug)
    
   
    // optionally access and extend (rather than replace) parent metadata
    // const previousImages = (await parent).openGraph?.images || []
   
    return {
      title: `${bandara.name} | ${bandara.origin}`,
      description: `Flight schedule at ${bandara.name}. All airlines schedule is from airport API`,
      keywords: ['Flight Schedule', 'Airport', `${bandara.name}`, `${bandara.origin}`, `${bandara.code}`],
      creator: 'I Made Eko Satria Wiguna',
      applicationName: 'Flight Schedule Next.js',
      alternates:{
        canonical: `/${bandara.code}`,
      },
      twitter: {
        card: 'summary_large_image',
        title: `${bandara.name} | ${bandara.origin}`,
        description: `Flight schedule at ${bandara.name}. All airlines schedule is from airport API`,
        siteId: '1467726470533754880',
        creator: '@Eko_SatriaW',
        creatorId: '1467726470533754880',
        images: ['https://nextjs.org/og.png'],
      },
      openGraph: {
        title: `${bandara.name} | ${bandara.origin}`,
        description: `Flight schedule at ${bandara.name}. All airlines schedule is from airport API`,
        url: `https://flight-schedule-three.vercel.app/${bandara.code}`,
        siteName: 'Next.js',
        images: [
          {
            url: 'https://nextjs.org/og.png',
            width: 800,
            height: 600,
          },
          {
            url: 'https://nextjs.org/og-alt.png',
            width: 1800,
            height: 1600,
            alt: 'My custom alt',
          },
        ],
        locale: 'en_US',
        type: 'website',
      },
    }
  }