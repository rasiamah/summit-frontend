import React, { } from "react";
import graduation from "../images/graduation.jpg";
import { Button} from "@mui/material";


export default function Contact() {

  return (
   <div class="p-6" style={{backgroundImage: `url(${graduation}`, backgroundSize:"cover", height:"100%"}}>
    <div class=" grid place-items-center rounded max-w-full min-h-screen bg-black bg-opacity-40 shadow-2xl " >
          <div class="absolute text-white bg-black bg-opacity-20 rounded p-12 ">
            <h1 class="text-6xl italic font-mono cursive tracking-widest text-center">Contact us!</h1>

            <p class="italic text-center text-2xl m-5">
            Email us  with all questions and concers.</p>
            <p class="text-center m-5">
            <Button variant="contained"><a href="mailto:#">Send Email</a></Button>
            </p>
            <p class="italic text-center text-2xl m-1">
            Office Phone</p>
            <p class="text-center text-1xl">
            xxx-xxx-xxx
            </p>
          </div>
    </div>
  </div>
  );
}

