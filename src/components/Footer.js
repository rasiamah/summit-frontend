import React from 'react';
import {Box, Typography} from '@material-ui/core';
import './footerstyles.css'; 
// import DescriptionIcon   from '@material-ui/icons/Description';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import ArrowRightSharpIcon from '@material-ui/icons/ArrowRightSharp';



export default function Footer() {
  return (

    <Box class="container bg-gray-900 max-w-full content-start position-fixed buttom-0" >
      <Box className="mainbox bg-gray-900 w-full" p={3} boxShadow={8} >
        <Box p={3} boxShadow={8} borderRadius={10} text-xs className="leftbox rounded bg-gray-800" >
        <Typography variant="h5" color="">ROSBY</Typography>
          <Typography>
            Front-End developer / UI/UX Designer
          </Typography>
        </Box>

        <Box  p={3} boxShadow={8} borderRadius={10} className="middlebox rounded bg-gray-800">
        <Typography variant="h5" color="">Kofi</Typography>
          <Typography>
            Application Developer
          </Typography>
        </Box>
        <Box p={3} boxShadow={8} borderRadius={9} className="rightbox rounded bg-gray-800">
        <Typography variant="h5" color="">Melvin</Typography>
          <Typography>
            Software Engineer
          </Typography>
        </Box>
      </Box >

      <Box className="justify-center">
          <div class="text-center text-white">
            &copy;{new Date().getFullYear()} The SUMMIT | All rights reserved |
            Terms Of Service | Privacy
         </div>
       </Box>
    
    </Box>

  );
}