'use client'
import { Player } from '@lottiefiles/react-lottie-player'
import AniJson from '@/public/images/Animation Plane.json'
export default function Animation(){
    return (
        <Player
          autoplay
          src={AniJson}
          style={{ height: '300px', width: '300px' }}
        >
        </Player>
    )
}
