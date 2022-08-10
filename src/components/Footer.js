import React from 'react';
import {Box, Typography,Link} from '@material-ui/core';
import './footerstyles.css'; 
// import DescriptionIcon   from '@material-ui/icons/Description';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer() {
  return (
    <Box class="wrapper p-4 bg-black max-w-full content-start buttom-0" >
      <Box className="mainbox bg-black w-full" p={3} boxShadow={8} >
        <Box p={3} boxShadow={8} borderRadius={10} text-xs class="leftbox rounded bg-black" >
        <Typography variant="h5" color="" class="text-3xl">Follow US:</Typography>
          <Typography>
          <Typography><LinkedInIcon/><Link href=""  color="inherit"> {'LinkedIn'} </Link></Typography>
          <Typography><FacebookIcon/><Link href="" color="inherit"> {'Facebook'} </Link></Typography>
          </Typography>
        </Box>

        <Box  p={3} boxShadow={8} borderRadius={10} class="middlebox rounded bg-black">
        <Typography variant="h5" color=""></Typography>
          <Typography>
            To God Be The Glory
          </Typography>
        </Box>
        <Box p={3} boxShadow={8} borderRadius={9} class="rightbox rounded italic bg-black">
          <Typography>
          <Link href=""  color="inherit"> {'Home'} </Link>
          </Typography>
          <Typography>
          <Link href=""  color="inherit"> {'What we do'} </Link>
          </Typography>
          <Typography>
          <Link href=""  color="inherit"> {'About SUMMIT'} </Link>
          </Typography>
          <Typography>
          <Link href=""  color="inherit"> {'Partners'} </Link>
          </Typography>
          <Typography>
          <Link href=""  color="inherit"> {'Contact'} </Link>
          </Typography>
        </Box>
      </Box >

      <Box className="justify-center">
          <div class="text-center text-1xl text-red-800">
            &copy;{new Date().getFullYear()} The SUMMIT | All rights reserved |
            Terms Of Service | Privacy
         </div>
       </Box>
    
    </Box>

  );
}