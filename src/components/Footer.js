
import React from 'react';
import {Box, Typography} from '@material-ui/core';
import './footerstyles.css';



export default function Footer() {
  return (

    <Box class="container bg-gray-900 max-w-full content-start" >
      <Box className="mainbox bg-gray-900 w-full" p={3} boxShadow={8} >
        
        <Box p={3} boxShadow={8} borderRadius={9} className="rightbox bg-gray-800">
        <Typography variant="h5" color="secondary">For Footer </Typography>
        </Box>
      </Box >

      <Box className="justify-center">
          <div class="text-center text-white">
            &copy;{new Date().getFullYear()} Rosby Asiamah | All rights reserved |
            Terms Of Service | Privacy
         </div>
       </Box>
    
    </Box>

  );
}