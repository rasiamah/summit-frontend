import React from 'react';
import {Box, Typography,Link} from '@material-ui/core';
import { Grid } from "@mui/material";
import './footerstyles.css'; 
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LanguageIcon from '@mui/icons-material/Language';

export default function Footer() {
  return (
    <Box class="wrapper p-4 bg-black max-w-full content-start buttom-0" >
      <Box className="mainbox bg-black w-full" p={3} boxShadow={8} >
        <Box p={3} boxShadow={8} borderRadius={10} text-xs class="leftbox rounded bg-black" >
        <Typography class="text-left">
        <Typography class="text-2xl text-blue-900 font-bold">The Summit</Typography>
        <Typography>Old Dominion University <br/> Norfolk VA, 23529</Typography>  
        </Typography>
        <Typography color="" class="text-2xl text-left">Follow US:</Typography>
          <Typography class="text-left space-y-2">
          <Typography><YouTubeIcon/><Link href="" color="inherit">{'Youtube'}</Link></Typography>  
          <Typography><LinkedInIcon/><Link href=""  color="inherit"> {'LinkedIn'} </Link></Typography>
          <Typography><FacebookIcon/><Link href="" color="inherit"> {'Facebook'} </Link></Typography>
        </Typography>
        </Box>

        <Box  p={3} boxShadow={8} borderRadius={10} class="middlebox rounded">
         <Grid container spacing={2}>
          <Grid >
            <div class="ml-12">
            <Typography variant="h5" color=""></Typography>
              <Typography class="text-3xl m-2 p-2">Programs:</Typography>
            <Typography>
              <Link href="/beamentor"  color="inherit" class="" > {'Be a Mentor'} </Link>
            </Typography>
            <Typography>
              <Link href="/beamember"  color="inherit" class=""> {'Be a Member'} </Link>
            </Typography>
            </div>
          </Grid>

          <Grid xs={12} md={6}>

          <div class=" mt-6 mb-6 rounded justify-center bg-white">
          <div class="bg-white pl-24 rounded">
          <LanguageIcon class="h-24"/>
          </div>
           <div class="text-black p-6 text-justify text-right">
            <span >
              We are a non profit organization that believs in diversity, change,
              family and the important of God.</span>
           </div>
          </div>
          </Grid>
         </Grid>
        </Box>

        <Box p={3} boxShadow={8} borderRadius={9} class="rightbox rounded italic bg-black">
        <Typography color="" class=" text-2xl mb-3">Navigation</Typography>
        <Typography class="space-y-2">
          <Typography>
          <Link href="/"  color="inherit"> {'Home'} </Link>
          </Typography>
          <Typography>
          <Link href="/whatwedo"  color="inherit"> {'What we do'} </Link>
          </Typography>
          <Typography>
          <Link href="/about"  color="inherit"> {'About SUMMIT'} </Link>
          </Typography>
          <Typography>
          <Link href="/partners"  color="inherit"> {'Partners'} </Link>
          </Typography>
          <Typography>
          <Link href="/programs"  color="inherit"> {'Programs'} </Link>
          </Typography>
          <Typography>
          <Link href="/contact"  color="inherit"> {'Contact'} </Link>
          </Typography>
        </Typography>
        </Box>
      </Box >

      <Box className="justify-center bg-blue-900 rounded w-full">
          <div class="bg-blue text-center text-1xl text-white mt-6">
            &copy;{new Date().getFullYear()} The SUMMIT | All rights reserved |
            Terms Of Service | Privacy
         </div>
       </Box>
    
    </Box>

  );
}