"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export default function FeedBack() {
  const [open, setOpen] = useState(false)
  useEffect(()=>{
    setTimeout(()=>{setOpen(true)},10000)
  }, [])
  return (
    <>
      <Dialog open={open} onOpenChange={()=>{setOpen(false)}}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <span>How about your experience on this site?</span>
            </DialogTitle>
          </DialogHeader>
          <h2>Hello 😁</h2>
        </DialogContent>
      </Dialog>
    </>
  );
}
