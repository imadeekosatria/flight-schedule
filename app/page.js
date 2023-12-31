import { revalidatePath } from 'next/cache'
import Link from "next/link"
import Footer from "@/components/footer"
import CardFlightHome from "@/components/cardFlightHome"
import bgBandara from "@/public/images/bg-bandara.jpg"
import SelectBandara from "@/components/selectBandara"
import { collection, getDocs} from "firebase/firestore"
import {db} from "@/utils/firebase"
import Image from "next/image"

import FeedBack from '@/components/feedback'
import ScrollUpButton from '@/components/scroollUp'

export const getBandara = async ()=> getDocs(collection(db, "bandara"))
                    .then((snapshot)=>{
                      let bandaras = []
                      snapshot.docs.forEach((doc)=>{
                          bandaras.push({...doc.data(), id: doc.id})
                      }) 
                      return bandaras
                    })

export default async function Home() {
  const databandara = async(bandaraAPI)=>{
    const url = bandaraAPI+'dept/domestic'
    const res = await fetch(url)
    return res.json()
  }
  revalidatePath('/')
  const d = await getBandara()
  
  let bandaraFlight = []
  
  await Promise.all(
    d.map( async bandara=> {
      const data = await databandara(bandara.url)
      if (data.data[0] != null) {
        bandaraFlight.push({name: bandara.name, data: data.data[0]})
      }
    })
  )
  
  // console.log(bandaraFlight)
  
  return (
    <>
      <div className="grid grid-rows-7 gap-y-4 h-screen ">
        <div className="row-span-6 flex flex-col">
          <div className=" relative">
            <div className="h-56 lg:h-72 w-full relative">
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 660.35 376.15" id="airport-waiting-lounge">
                <g data-name="Layer 2"><path fill="#e9edfb" d="M1588.54,383.43s36.92,128.16-102.31,195.88c-32.93,16-105.38-17.63-164.38-14.29-111.63,6.32-196.23,44.3-251.21,21.86-61.51-25.11-84.22-49.47-93.55-66.56-2.44-4.46-5.78-9.14-8.33-13.4-15.91-26.51-66.09-124.89-9.66-189.43,48.08-55,142.69-54.73,189.92-50.65a134.77,134.77,0,0,1,48.48,13.73c29.66,14.76,83.83,40.92,106.69,46.71,43.11,10.93,49.71,9,130-25.34S1572.56,269.19,1588.54,383.43Z" transform="translate(-932.63 -265.24)"></path></g>
                <g data-name="Layer 3"><path fill="#e1e6fb" d="M1011,478.58S1071,362.32,1140,360.13s68,76.73,87.69,88.79,40.56,8.77,55.91-17.54,32.78-75.23,65.66-73,70.27,104.83,90,104.83,56-78.27,88.46-77.09c33.61,1.22,56.67,92.67,56.67,92.67l-51.95-.24Z" transform="translate(-932.63 -265.24)"></path></g>
                <g data-name="Layer 5"><g data-name="Layer 4"><path fill="#bac5f4" d="M949.62,478.45,1148.77,481s16.57-1,33.57-14c12.94-9.88,17.43-17,17.43-24s-6.48-43-70-50L935.4,389.3s-1.72,6-2.59,17.94a98.62,98.62,0,0,0,.44,16.64,180.16,180.16,0,0,0,3,19.08C939.91,459.72,944.89,470.73,949.62,478.45Z" transform="translate(-932.63 -265.24)"></path><ellipse cx="193.64" cy="154.31" fill="#fff" rx="38.5" ry="10.5"></ellipse><circle cx="40.64" cy="170.31" r="10.5" fill="#fff"></circle><circle cx="71.14" cy="170.81" r="11" fill="#fff"></circle><circle cx="71.14" cy="170.81" r="11" fill="#fff"></circle><circle cx="103.14" cy="170.81" r="11" fill="#fff"></circle><circle cx="353.13" cy="118.33" r="15.86" fill="#fff"></circle><circle cx="336.14" cy="119.52" r="12.67" fill="#fff"></circle><circle cx="542.42" cy="82.46" r="18.44" fill="#fff"></circle><circle cx="562.08" cy="84.43" r="11.22" fill="#fff"></circle><circle cx="523.35" cy="86.32" r="11.22" fill="#fff"></circle><circle cx="134.14" cy="170.81" r="11" fill="#fff"></circle><path fill="#f5f5fc" d="M954,489l628.94.48s-21.61,66.16-36.71,78.89,13.94,73.85-97.58,34.38S1275.55,604,1243,609.11s-118.49,47.11-153.34,26.74S1071.09,591.29,1006,590s-61.57-66.21-61.57-66.21L954,489" transform="translate(-932.63 -265.24)"></path></g><polygon fill="#fff" points="650.3 224.2 21.36 223.76 16.58 213.25 652.95 213.36 650.3 224.2"></polygon><polygon fill="#fff" points="110.78 214.48 104.9 214.48 104.83 8.24 110.75 6.95 110.78 214.48"></polygon><polygon fill="#fff" points="281.4 216.83 275.52 216.83 275.47 20.54 281.29 23.27 281.4 216.83"></polygon><polygon fill="#fff" points="448.5 219.19 442.61 219.19 442.62 60.5 448.55 58.48 448.5 219.19"></polygon><polygon fill="#fff" points="607.06 216.83 601.18 216.83 601.23 20.95 607.18 23.42 607.06 216.83"></polygon></g><g data-name="Layer 6"><polygon fill="#bac5f4" points="418.41 276.47 433.13 276.47 433.09 265.3 576.28 265.28 576.28 277.06 589.24 277.06 589.24 247.02 418.41 247.61 418.41 276.47"></polygon><polygon fill="#bac5f4" points="418.77 242.36 589.32 241.97 589.32 234.69 418.39 235.07 418.77 242.36"></polygon><polygon fill="#bac5f4" points="418.39 231.62 588.94 231.24 588.94 223.96 418.01 224.34 418.39 231.62"></polygon><polygon fill="#bac5f4" points="418.77 220.51 589.32 220.13 589.32 212.84 418.39 213.23 418.77 220.51"></polygon><polygon fill="#bac5f4" points="418.77 209.01 589.32 208.63 589.32 201.35 418.39 201.73 418.77 209.01"></polygon></g>
              </svg> */}
              <Image src={bgBandara} fill={true} sizes='100vw' className="brightness-50 backdrop-blur-sm object-cover" alt="airport bg" priority={true}/>
            </div>
            <div className="w-full absolute top-0 flex flex-col items-center gap-y-6 pt-20">
              <SelectBandara bandara={d}/>
            </div>
          </div>
          <div className="mt-40 lg:mt-24 mx-6 z-30">
            <div className="flex justify-between mx-6 sm:justify-around lg:justify-evenly mb-4 ">
              <span className="text-slate-800 text-sm font-semibold">Upcoming flight</span>
              <Link href={"#"} className="flex items-center text-indigo-400 text-sm font-medium">See All <box-icon name='chevron-right' color='#7088f1' ></box-icon></Link>
            </div>
            <div className="flex gap-6 md:gap-8 md:mx-8 flex-wrap justify-center">
                {bandaraFlight.map((bandara, i)=>{
                  return <CardFlightHome key={i} props={{bandara, i}}/>
                })}
            </div>
          </div>
        </div>
        <FeedBack/>
        <ScrollUpButton/>
        <Footer/>
      </div>
    </>
  )
}

export const metadata = {
  title: 'Flight Schedule',
  description: 'Flight Schedule App made by I Made Eko Satria Wiguna. The schedule data is from Angkasa Pura 1 Airports. All airline logos are from Angkasa Pura 2 website',
  alternates:{
    canonical: '/',
  }
}
