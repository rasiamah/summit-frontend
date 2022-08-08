
import * as React from "react";
import rosby1 from "../images/Rosby1.jpg";
import engbuilding from "../images/Engbuilding.jpg";
//import { styled } from "@mui/material/styles";
//import Grid from "@mui/material/Grid";
//import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary
// }));

export default function Home() {
  return (
    <div class=" min-h-screen p-6 grid " >
      <div class=" grid grid-cols-2 container rounded bg-black max-w-full shadow-2xl "> 
        <Box class="p-4 bg-black text-white rounded">
         Box1
        </Box>

        <Box class="relative p-1 bg-black rounded ">
          <img src={engbuilding} alt="engbuilding" class="rounded top-6 w-full"/>
          <div class="absolute p-4 bg-black bg-opacity-30 top-1/2 buttom-1/2" >
            <div class=" text-white overflow-auto"  >Insert text here if needed</div>
          </div>
        </Box>

      </div>
    
      <div class=" grid grid-cols-2 p-1 rounded max-w-full bg-black shadow-2xl ">
      <Box class="relative p-1 bg-black rounded ">
          <img src={rosby1} alt="rosby1" class="rounded"/>
          <div class="absolute p-4 bg-black bg-opacity-30 left-3/4  top-2/4" >
            <div class=" text-white overflow-auto"  >Insert text here if needed</div>
          </div>
        </Box>

        <Box class="p-6 bg-gblack">
          Box 4
        </Box>
        
      </div>

    </div>
  )
};
