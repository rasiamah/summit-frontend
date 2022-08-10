
import * as React from "react";
import rosby1 from "../images/Rosby1.jpg";
import engbuilding from "../images/Engbuilding.jpg";
import Box from "@mui/material/Box";
import { FormatQuoteRounded } from "@mui/icons-material";



export default function Home() {
  return (
    <div class=" min-h-screen p-6 grid bg-blue-400 " >
      <div class=" grid grid-cols-2 container rounded bg-black max-w-full shadow-2xl "> 
        <Box class="p-6 bg-black text-white rounded">
         Box1
        </Box>

        <Box class="relative p-1 bg-black rounded ">
          <img src={engbuilding} alt="engbuilding" class="rounded top-6 w-full"/>
          <div class="absolute p-4 bg-black bg-opacity-40 top-1/2 buttom-full" >
            <div class=" text-white text-3xl italic text-justify"  >
              We do it for the impact. So others may prevail beyond their known capabilities.
            </div>
          </div>
        </Box>

      </div>
    
      <div class=" grid grid-cols-2 p-1 rounded max-w-full bg-black shadow-2xl ">
      <Box class="relative p-1 bg-black rounded">
           <img src={rosby1} alt="rosby1" class="rounded"/> 
          <div class="absolute p-4 bg-black bg-opacity-40 top-1/3" >
            <div class=" text-white max-w-full italic text-justify" >
            <div class=" text-center" > <FormatQuoteRounded/> </div>
            Being a member of the summit helped me find my feet at old dominion University when I first go there.
            It gave me the opportunit to meet friends who were willing to put in the effort and do what it takes
            to be successful and so that made me work harder. The friendliness and mentorship of the leaders motivated me alot. I'm glad to have been 
            a member of the summit. 
            <div class=" text-right " > "Rosby Asiamah" </div>
            </div>
          </div>
        </Box>

        <Box class="p-6 text-white bg-black">
        Box 2
         
        </Box>
        
      </div>

    </div>
  )
};
