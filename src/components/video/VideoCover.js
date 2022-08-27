import { Typography } from '@mui/material'
import React from 'react'
import "./video.css"

const VideoCover = ({display}) => {
  return (
    <div className='video-cover' style={{ display: display}}>
        <div>
        <Typography variant='h1' fontWeight={"700"}>Pomaja Twaweza</Typography>
        {/* <Typography variant='caption' fontWeight={"700"} align="center">"Pomaja Twaweza"</Typography> */}
        </div>
    </div>
  )
}

export default VideoCover