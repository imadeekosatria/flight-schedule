"use client"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from "next/link"
import Footer from "@/components/footer"
import submit from "./action"


export default function Home() {
  return (
    <>
    <div className="flex flex-col justify-between h-screen">
      <div>
        <div className="max-sm:w-full bg-violet-300 relative">
          <div className="h-56">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 660.35 376.15" id="airport-waiting-lounge">
              <g data-name="Layer 2"><path fill="#e9edfb" d="M1588.54,383.43s36.92,128.16-102.31,195.88c-32.93,16-105.38-17.63-164.38-14.29-111.63,6.32-196.23,44.3-251.21,21.86-61.51-25.11-84.22-49.47-93.55-66.56-2.44-4.46-5.78-9.14-8.33-13.4-15.91-26.51-66.09-124.89-9.66-189.43,48.08-55,142.69-54.73,189.92-50.65a134.77,134.77,0,0,1,48.48,13.73c29.66,14.76,83.83,40.92,106.69,46.71,43.11,10.93,49.71,9,130-25.34S1572.56,269.19,1588.54,383.43Z" transform="translate(-932.63 -265.24)"></path></g>
              <g data-name="Layer 3"><path fill="#e1e6fb" d="M1011,478.58S1071,362.32,1140,360.13s68,76.73,87.69,88.79,40.56,8.77,55.91-17.54,32.78-75.23,65.66-73,70.27,104.83,90,104.83,56-78.27,88.46-77.09c33.61,1.22,56.67,92.67,56.67,92.67l-51.95-.24Z" transform="translate(-932.63 -265.24)"></path></g>
              <g data-name="Layer 5"><g data-name="Layer 4"><path fill="#bac5f4" d="M949.62,478.45,1148.77,481s16.57-1,33.57-14c12.94-9.88,17.43-17,17.43-24s-6.48-43-70-50L935.4,389.3s-1.72,6-2.59,17.94a98.62,98.62,0,0,0,.44,16.64,180.16,180.16,0,0,0,3,19.08C939.91,459.72,944.89,470.73,949.62,478.45Z" transform="translate(-932.63 -265.24)"></path><ellipse cx="193.64" cy="154.31" fill="#fff" rx="38.5" ry="10.5"></ellipse><circle cx="40.64" cy="170.31" r="10.5" fill="#fff"></circle><circle cx="71.14" cy="170.81" r="11" fill="#fff"></circle><circle cx="71.14" cy="170.81" r="11" fill="#fff"></circle><circle cx="103.14" cy="170.81" r="11" fill="#fff"></circle><circle cx="353.13" cy="118.33" r="15.86" fill="#fff"></circle><circle cx="336.14" cy="119.52" r="12.67" fill="#fff"></circle><circle cx="542.42" cy="82.46" r="18.44" fill="#fff"></circle><circle cx="562.08" cy="84.43" r="11.22" fill="#fff"></circle><circle cx="523.35" cy="86.32" r="11.22" fill="#fff"></circle><circle cx="134.14" cy="170.81" r="11" fill="#fff"></circle><path fill="#f5f5fc" d="M954,489l628.94.48s-21.61,66.16-36.71,78.89,13.94,73.85-97.58,34.38S1275.55,604,1243,609.11s-118.49,47.11-153.34,26.74S1071.09,591.29,1006,590s-61.57-66.21-61.57-66.21L954,489" transform="translate(-932.63 -265.24)"></path></g><polygon fill="#fff" points="650.3 224.2 21.36 223.76 16.58 213.25 652.95 213.36 650.3 224.2"></polygon><polygon fill="#fff" points="110.78 214.48 104.9 214.48 104.83 8.24 110.75 6.95 110.78 214.48"></polygon><polygon fill="#fff" points="281.4 216.83 275.52 216.83 275.47 20.54 281.29 23.27 281.4 216.83"></polygon><polygon fill="#fff" points="448.5 219.19 442.61 219.19 442.62 60.5 448.55 58.48 448.5 219.19"></polygon><polygon fill="#fff" points="607.06 216.83 601.18 216.83 601.23 20.95 607.18 23.42 607.06 216.83"></polygon></g><g data-name="Layer 6"><polygon fill="#bac5f4" points="418.41 276.47 433.13 276.47 433.09 265.3 576.28 265.28 576.28 277.06 589.24 277.06 589.24 247.02 418.41 247.61 418.41 276.47"></polygon><polygon fill="#bac5f4" points="418.77 242.36 589.32 241.97 589.32 234.69 418.39 235.07 418.77 242.36"></polygon><polygon fill="#bac5f4" points="418.39 231.62 588.94 231.24 588.94 223.96 418.01 224.34 418.39 231.62"></polygon><polygon fill="#bac5f4" points="418.77 220.51 589.32 220.13 589.32 212.84 418.39 213.23 418.77 220.51"></polygon><polygon fill="#bac5f4" points="418.77 209.01 589.32 208.63 589.32 201.35 418.39 201.73 418.77 209.01"></polygon></g>
            </svg>
          </div>
          <div className="w-60 absolute top-0 h-full flex flex-col gap-y-6 pt-20 mx-8">
            <h1 className="text-slate-800 text-2xl font-semibold">Find your flight schedule</h1>
            <form className="w-80 rounded bg-white p-4 flex flex-col gap-y-4" action={submit}>
              <h2 className="text-slate-800 text-base font-semibold">Select Airport</h2>
              <Select name="airport">
                <SelectTrigger className="w-72">
                  <SelectValue placeholder="From"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CGK">Jakarta (CKG)</SelectItem>
                  <SelectItem value="DPS">Denpasar (DPS)</SelectItem>
                  <SelectItem value="HAL">Surabaya (HAL)</SelectItem>
                </SelectContent>
              </Select>
              <button type="submit" className="mt-4 w-72 h-10 bg-violet-300 rounded-lg text-slate-800 text-base font-semibold">Search</button>
            </form> 
          </div>
        </div>
        <div className="w-80 mt-40 mx-8">
          <div className="flex justify-between mb-4">
            <span className="text-slate-800 text-sm font-semibold">Upcoming flight</span>
            <Link href={"#"} className="flex items-center text-indigo-400 text-sm font-semibold">See All <box-icon name='chevron-right' color='#7088f1' ></box-icon></Link>
          </div>
          <div className="p-3 w-80 relative bg-white rounded-2xl shadow">
            <div className="flex justify-between">
              <h2 className="text-slate-800 text-xl font-semibold">Soekarno-Hatta</h2>
              <div className="flex items-center mb-6">
                <box-icon type='solid' color='#7088f1' name='watch'></box-icon>
                <span className="text-indigo-400 text-xs font-medium">1 h 30 min</span>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-800 text-xs font-normal">08:00</span>
              <span className="text-slate-800 text-xs font-normal">09:00</span>
            </div>
            <div className="grid grid-cols-5 mb-2">
              <div className="flex flex-col text-left">
                <span className="text-slate-800 text-lg font-semibold">JKT</span>
                <span className="text-indigo-400 text-xs font-medium">Jakarta</span>
              </div>
              <div className="col-span-3">
                <svg width="174" height="32" viewBox="0 0 174 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="4" y1="16.5" x2="169" y2="16.5" stroke="#BDBDBD"/>
                  <circle cx="87" cy="16" r="15.5" fill="white" stroke="#BDBDBD"/>
                  <path d="M82.1562 26.265H84.1711L90.8855 17.759H95.1385C96.3123 17.759 97.265 16.8063 97.265 15.6325C97.265 14.4587 96.3123 13.506 95.1385 13.506H90.7738L84.0594 5H82.1573L85.145 13.506L80.253 13.506L78.1265 10.3162H76L78.1265 15.6325L76 20.9487H78.1265L80.253 17.759H85.2343L82.1562 26.265Z" fill="#4F4F4F"/>
                  <circle cx="2.5" cy="16.5" r="2.5" fill="#D9D9D9"/>
                  <circle cx="171.5" cy="16.5" r="2.5" fill="#D9D9D9"/>
                </svg>
              </div>
              <div className="flex flex-col text-right">
                <span className="text-slate-800 text-lg font-semibold">SBY</span>
                <span className="text-indigo-400 text-xs font-medium">Surabaya</span>
              </div>
            </div>
            <div className="text-right w-full">
              <span className="mr-4 text-black text-xs font-medium">Status &ensp; :</span>
              <span className="px-2 py-0.5 bg-rose-500 rounded-lg text-white text-xs font-medium ">Boarding</span>
            </div>
          </div>

        </div>
      </div>
      <Footer></Footer>
    </div>
    </>
  )
}
