export default function CardFlightHome(props){
    return (
        <>
            <div className="p-3 w-80 relative bg-white rounded-2xl shadow mb-8">
                <div className="flex justify-between">
                    <h2 className="text-slate-800 text-xl font-semibold">{props.props.name}</h2>
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
        </>
    )
}