'use client'
import { Player } from '@lottiefiles/react-lottie-player'
import AniJson from '@/public/images/Animation Plane.json'
export default function Animation(){
    return (
        <Player
          autoplay
          loop
          src={AniJson}
          style={{ height: '90vh', width: '90vw' }}
        >
        </Player>
    )
}
