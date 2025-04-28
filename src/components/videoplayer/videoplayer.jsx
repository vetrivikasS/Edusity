import React from 'react'
import './Videoplayer.css'
import video from '../../assets/college-video.mp4'

const Videoplayer = ({ playState, setPlayState }) => {

  const handleClose = () => {
    setPlayState(false)
  }
  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} onClick={handleClose}>
      <video src={video} autoPlay muted controls onClick={(e) => e.stopPropagation()}></video>

    </div>
  )
}

export default Videoplayer