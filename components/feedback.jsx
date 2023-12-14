"use client"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "./ui/button"
import { Loader2 } from "lucide-react"
import { useEffect, useState } from "react"
import ReactStars from "react-rating-stars-component"
import { doc, setDoc, collection} from "firebase/firestore"
import { db } from '@/utils/firebase'

export default function FeedBack() {
  const [open, setOpen] = useState(false)
  const [iswait, setIswait] = useState(false)
  useEffect(() => {
    setOpen(true);
  }, [])

  
  // const [rating, setRating] = useState(null)
  const [feedback, setFeedback] = useState({rating: '', feedback:'', date: ''})
  
    
  const handleClick = async (e)=>{
    e.preventDefault()
    const feedbackRef = doc(collection(db, "feedback"))
    try {
      setIswait(true)
      await setDoc(feedbackRef, {...feedback, date: new Date()})
      console.log('Succesful')
      setIswait(false)
      setOpen(false)
    } catch (error) {
      console.log(error)
    }
    // console.log(rating)
    
  }
  return (
    <>
      <form>
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
              onChange={(newRating)=>{setFeedback({...feedback, rating: newRating})}}
              size={50}
              isHalf={true}
              emptyIcon={<box-icon name='star'></box-icon>}
              fullIcon={<box-icon type='solid' name='star-half'></box-icon>}
              activeColor="#fde047"
              classNames={"w-full flex justify-around"}
              a11y={false}
            />
            <label htmlFor="feedback">
              <Textarea onChange={(e)=>{setFeedback({...feedback, feedback: e.target.value})}} placeholder="Type your feedback here."  name="feedback" id="feedback" style={{resize:'none'}}/>
            </label>
            {
              iswait? (
                  <Button disabled>
                    <Loader2 className="animate-spin"/>
                    Please wait
                  </Button>
                ) : (
                  <Button type="submit" onClick={handleClick}>Send</Button>
              )
            }
          </DialogContent>
        </Dialog>
      </form>
    </>
  );
}
