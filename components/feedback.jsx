"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea"
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";

export default function FeedBack() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 10000);
  }, [])

  
    const [rating, setRating] = useState(null)
    const [feedback, setFeedback] = useState(null)
    
  
  console.log(rating)
  console.log(feedback)
  return (
    <>
      <Dialog
        open={open}
        onOpenChange={() => {
          setOpen(false);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <div className="flex items-center gap-x-2">
                Your Feedback
                <box-icon type='solid' name='comment-detail'></box-icon>
              </div>
            </DialogTitle>
            <DialogDescription>
              <div className="flex flex-col text-center">
                <span>I would like your feedback to improve the website.</span>
                <span>How would you rate the website?</span>  
              </div>            
            </DialogDescription>
          </DialogHeader>
          <ReactStars
            count={5}
            onChange={(newRating)=>{setRating(newRating)}}
            size={50}
            isHalf={true}
            emptyIcon={<box-icon name='star'></box-icon>}
            fullIcon={<box-icon type='solid' name='star-half'></box-icon>}
            activeColor="#fde047"
            classNames={"w-full flex justify-around"}
            a11y={false}
          />
          <label htmlFor="feedback">
            <Textarea onChange={(e)=>{setFeedback(e.target.value)}} placeholder="Type your feedback here."  name="feedback" id="feedback" style={{resize:'none'}}/>
          </label>
          <Button onClick={()=>{console.log('clicked')}}>Send</Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
