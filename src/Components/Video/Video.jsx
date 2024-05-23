import React, { useRef } from 'react'
import './Video.css'
import video from'../../assets/college-video.mp4'

const Video = ({playstate, setplayer}) => {
const player=useRef(null);
const closePlayer=(e)=>{
  if(e.target === player.current){
   setplayerstate(false);
  }
}

  return (
    <div className={`video-player ${playstate?'':'hide'}`} ref={player} onClick={closePlayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default Video
