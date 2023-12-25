import { useToast } from "@/components/ui/use-toast"
import { useState } from "react";

export default function Speech({ params }) {
    const { toast } = useToast()
    const {propsBandara, terminal} = params
    console.log(params)
    const status = [
        {
        status: "LATE ARRIVAL",
        indonesian: "keterlambatan",
        },
        {
        status: "GATE CLOSE",
        indonesian: "pintu di tutup",
        },
        {
        status: "LAST CALL",
        indonesian: "Panggilan terakhir",
        },
        {
        status: "BOARDING",
        indonesian: "Naik ke pesawat",
        },
        {
        status: "DEPARTED",
        indonesian: "Telah berangkat",
        },
        {
        status: "CHECK IN CLOSE",
        indonesian: "check-in ditutup",
        },
    ]
    const [isplay, setIsplay]= useState(false)

    return (
        <>
            <span>Hello</span>
        </>
    )

  
}
