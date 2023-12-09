"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import image from "../public/images/image-loader.png";
import { getDownloadURL, ref } from "firebase/storage";
import { Jam, Status } from "./cardFlight";
import { storage } from "@/utils/firebase";
import { motion } from "framer-motion"


export default function CardFlightHome({ props }) {
  // console.log(props)
  const [airport, setAirport] = useState(null);
  useEffect(()=>{
    const file = props.bandara.airportcode+".jpg"
    const storageRef = ref(storage, 'bandara')
    getDownloadURL(ref(storageRef, file)).then((url)=>{
        setAirport(url)
    })

  },[])

  const [aircraft, setAircraft] = useState(image);
  useEffect(() => {
    const file = props.bandara.operator + ".png";
    const storageRef = ref(storage, "aircraft");
    getDownloadURL(ref(storageRef, file))
      .then((url) => {
        setAircraft(url);
        // console.log(url)
      })
      .catch((err) => {
        const num = props.bandara.flightno;
        // console.log(num)
        const file = num.slice(0, 2) + ".png";
        getDownloadURL(ref(storageRef, file)).then((url) => {
          setAircraft(url);
        });
      });
  }, []);
  // console.log(props.props)
  
  
  return (
    <>
      <motion.div className="p-3 w-80 relative bg-white rounded-2xl shadow drop-shadow-2xl" initial={{ y:100, opacity:0 }}
      animate={{ y:0, opacity: 1}}
      transition={{
        duration: 0.8,
        delay: 0.5 * props.i,
        ease: [0, 0.71, 0.2, 1.01]
      }}>
        <div className="flex justify-between">
          <h2 className="text-slate-800 text-xl font-semibold">{props.bandara.name}</h2>
          <div className="flex items-center">
            <box-icon type="solid" color="#7088f1" name="watch"></box-icon>
            <span className="text-indigo-400 text-xs font-medium">
              {Jam(props.bandara.schedule)}
            </span>
          </div>
        </div>
        <div className="object-cover w-2/5 h-10 relative aspect-auto">
          <Image src={aircraft} fill={true} loading="lazy" alt="Logo" className="aspect-auto"/>
        </div>
        <div className="grid grid-cols-5 mb-2">
          <div className="flex flex-col text-left">
            <span className="text-slate-800 text-lg font-semibold">
              {props.bandara.airportcode}
            </span>
            <span className="text-indigo-400 text-xs font-medium">
              {props.bandara.airportloc}
            </span>
          </div>
          <div className="col-span-3">
            <svg
              width="174"
              height="32"
              viewBox="0 0 174 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="4" y1="16.5" x2="169" y2="16.5" stroke="#BDBDBD" />
              <circle cx="87" cy="16" r="15.5" fill="white" stroke="#BDBDBD" />
              <path
                d="M82.1562 26.265H84.1711L90.8855 17.759H95.1385C96.3123 17.759 97.265 16.8063 97.265 15.6325C97.265 14.4587 96.3123 13.506 95.1385 13.506H90.7738L84.0594 5H82.1573L85.145 13.506L80.253 13.506L78.1265 10.3162H76L78.1265 15.6325L76 20.9487H78.1265L80.253 17.759H85.2343L82.1562 26.265Z"
                fill="#4F4F4F"
              />
              <circle cx="2.5" cy="16.5" r="2.5" fill="#D9D9D9" />
              <circle cx="171.5" cy="16.5" r="2.5" fill="#D9D9D9" />
            </svg>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-slate-800 text-lg font-semibold">
              {props.bandara.fromto}
            </span>
            <span className="text-indigo-400 text-xs font-medium">
              {props.bandara.fromtolocation}
            </span>
          </div>
        </div>
        <div className="text-right w-full">
          <span className="mr-4 text-black text-xs font-medium">
            Status &ensp; :
          </span>
          <Status stat={props.bandara.flightstat} />
        </div>
      </motion.div>
    </>
  );
}
