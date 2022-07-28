
import * as React from "react";
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
    <div class=" min-h-screen p-6 bg-gray-300 grid " >
      <div class=" rounded max-w-full bg-green-900 text-white shadow-2xl ">
        <Box class="p-6">
          <h1>Home Page</h1>
          <p>"I might create the home page ina way where there are more grids.
          So contnt can go in each section of the grid and look neat and present table"</p>
        </Box>
      </div>
      <div class=" grid grid-cols-2 rounded max-w-full bg-gray-200 shadow-2xl ">
        <Box class="p-6">
          <h1>Home Page</h1>
          <p>"I might create the home page ina way where there are more grids.
          So contnt can go in each section of the grid and look neat and present table"</p>
        </Box>
        <Box class="p-6 bg-gray-900 text-white rounded">
          <h1>More information</h1>
          <p>"I might create the home page ina way where there are more grids.
          So contnt can go in each section of the grid and look neat and present table"</p>
        </Box>
      </div>
    
      <div class=" grid gap-2 grid-cols-2 rounded max-w-full bg-gray-200 shadow-2xl ">
      <Box class="p-6 bg-gray-900 text-white rounded">
          <h1>More information</h1>
          <p>"I might create the home page ina way where there are more grids.
          So contnt can go in each section of the grid and look neat and present table"</p>
        </Box>
        <Box class="p-6">
          <h1>Home Page</h1>
          <p>"I might create the home page ina way where there are more grids.
          So contnt can go in each section of the grid and look neat and present table"</p>
        </Box>
      </div>

      
     
   
    </div>
  )
};
