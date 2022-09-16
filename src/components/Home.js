
import * as React from "react";
import rosby1 from "../images/Rosby1.jpg";
import engbuilding from "../images/Engbuilding.jpg";
import Box from "@mui/material/Box";
import { FormatQuoteRounded } from "@mui/icons-material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Home() {
  return (
     <div class=" min-h-screen p-3 grid {*bg-gradient-to-r from-green-500 to-blue-500*}" >

        {/* <Box class=" bg-black text-white rounded mb-6">
        <iframe class="h-screen w-full rounded p-12" src="https://www.youtube.com/embed/BlnPxQeFykQ?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com" 
               title="“The Summit” Student Organization Reaches for the Top" 
                frameborder="0">

        </iframe>
        </Box> */}
                
      <div class=" grid grid-cols-2 container rounded max-w-full mb-6 "> 
        <Box class=" p-12 grid place-items-center ">
          <div class="p-5 text-3xl font-bold text-center font-bold shadow-4xl bg-gray-300 rounded">
            <span class="text-blue-900">Motto:</span> "Pomaja Twaweza"
          </div>
          <div class="p-5 rounded font-bold text-center text-justify shadow-4xl bg-black text-white italic">
            <strong>Mission:  </strong>Developing and connecting first-generation Black students
                     through mentoring for future success.
          </div>
          <div class="p-5 rounded font-bold text-center text-justify shadow-2xl bg-gray-300 italic">
            <strong>Vission: </strong>To build intellectuals with confidence and equip them with 
                skills needed to make a difference in the future.
          </div>
          <div class="p-5 rounded font-bold text-center text-justify shadow-4xl bg-black text-white italic">
            <strong>Values: </strong>Academic Excellence, Moral Integrity, Selflessness, 
              Servitude, Sportsmanship, Fellowship, Discipline, Accountability, and Commitment.
          </div>
        </Box>

        <Box class="relative bg-black rounded ">
          <img src={engbuilding} alt="engbuilding" class="top-6 rounded w-full"/>
        </Box>

      </div>
      <div class="p-12">
        <h1 class="text-center font-bold text-6xl">Our<span class="text-blue-900"> Mission</span></h1>
        <Box class="text-black text-center">
          <p class="mb-4 text-2xl text-justify pr-80 pl-80">
              Relationships shape the experience and outcomes of a student’s journey through higher education. 
              Some students will find these relationships among faculty and advisors; however, many more will 
              struggle to forge the long-lasting relationships that drive student success and open doors. 
          </p>
          <p class="mb-4 text-2xl text-justify pr-80 pl-80">
              At Mentor Collective, we seek to make life-changing relationships a feature of every student’s college experience. 
              To realize this vision, we partner with forward-thinking institutions that are committed to equity, inclusion, and 
              relationship-centered education.
          </p>

        </Box>

      </div>
    
      <div class=" grid grid-cols-2 max-w-full pt-16 shadow-2xl ">
      <Box class="relative bg-black ">
           <img src={rosby1} alt="rosby1" class="rounded"/> 
          <div class="absolute p-4 bg-black bg-opacity-40 top-1/2" >
            <div class=" text-white max-w-full italic text-justify" >
            <div class=" text-center leading-loose" > <FormatQuoteRounded/> </div>
            Being a member of the summit helped me find my feet at old dominion University when I first go there.
            It gave me the opportunit to meet friends who were willing to put in the effort and do what it takes
            to be successful and so that made me work harder. The friendliness and mentorship of the leaders motivated
             me alot. I'm glad to have been 
            a member of the summit. 
            <div class=" text-right " > "Rosby Asiamah" </div>
            </div>
          </div>
        </Box>

        <Box class="p-1 text-white text-center text-3xl text-white 
                    bg-gradient-to-r from-green-500 to-black">
          <div class="  mt-12 italic">Pillars of The SUMMIT</div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header">
              <Typography>Intelectual</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                A little bit of intellectual information
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1b-header">
              <Typography>Spiritual</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                A little bit of spiritual information
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1c-header">
              <Typography>Emotioanl</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                A little bit of emotioanl information
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1d-header">
              <Typography>Physical</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                A little bit of physical information
              </Typography>
            </AccordionDetails>
          </Accordion>
        
         
        </Box>
        
      </div>

    </div>
  )
};
