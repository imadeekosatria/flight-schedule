"use client";
import { useState, memo, useEffect } from "react";
import Cardflight from "@/components/cardFlight";

const CardFlightList = memo(function CardFlightList({ data, query, params }) {
    return (
      <div className="flex flex-wrap gap-4 justify-center my-9 md:py-4 md:h-[35rem] md:overflow-y-auto mx-4 ">
        {data
          .filter((el) => {
            return query.toLowerCase() === ""
              ? el
              : Object.keys(el).some((p) => {
                  if (el[p] !== null) {
                    if (el[p].toLowerCase().includes(query)) {
                      return el[p].toString().toLowerCase().includes(query);
                    }
                  }
                });
          })
          .map((flightstat, index) => (
            // console.log(aircraft)
            <Cardflight
              key={flightstat.flightno}
              props={[flightstat, params, index]}
            />
          ))}
      </div>
    );
  }
)

export default function ClientComponent({ params }) {
  // console.log(params)
  const [query, setQuery] = useState("");
  const [stick, setStick] = useState({container: 'relative', bg: 'bg-white', text: 'text-slate-900'})
  const data = params[0];

  const handleScroll = () => {
    // Check if the user has scrolled down by a certain amount (e.g., 200 pixels)
    if (window.scrollY > 400 && window.matchMedia("(max-width: 768px)")) {
      setStick({container: 'fixed top-8 z-20', bg: 'bg-slate-700', text: 'text-purple-600'});
      
    } else {
      setStick({container: 'relative', bg: 'bg-white', text: 'text-slate-900'});
    }
  };

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  },[])

  const inputHandler = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
    setQuery(e.target.value);
  };
  return (
    <>
      <div className="flex flex-col max-sm:items-center mt-52 ">
        <div className="flex flex-col gap-y-6 items-center">
          <span className="text-slate-800 text-lg text-center font-semibold">
            Upcoming Flights
          </span>
          <div className={`${stick.container}`}>
            <form onSubmit={(e) => e.preventDefault()}>
              <label
                htmlFor="flightSearch"
                className="absolute flex items-center h-10 ml-4 gap-2"
              >
                <box-icon name="search" color="#7088f1"></box-icon>
              </label>
              <input
                type="text"
                onChange={inputHandler}
                name="flightSearch"
                className={`w-80 h-10 ${stick.bg} ${stick.text} rounded-3xl px-12 shadow-2xl focus:outline-none placeholder:text-violet-300 placeholder:text-sm placeholder:font-medium`}
                placeholder="Flight number/city"
              />
            </form>
          </div>
        </div>
        <CardFlightList data={data} query={query} params={params[1]}/>
      </div>
    </>
  );
}


