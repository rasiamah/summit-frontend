import { Typography } from '@mui/material'
import React from 'react'
import logo from "../../images/logo.JPG"
import "./video.css"

const VideoCover = ({display}) => {
  return (
    <div className='video-cover' style={{ display: display}}>
        <div >
        <Typography variant='h1' fontWeight={"700"}>Pomaja Twaweza</Typography>
        </div>

        <div>
          <img src={logo} alt="summit-logo" width="w-full" class="d-inline-block align-text-top rounded"/> 
        </div>
    </div>
  )
}

export default VideoCover