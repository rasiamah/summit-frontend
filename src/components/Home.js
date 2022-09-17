
import * as React from "react";
import rosby1 from "../images/Rosby1.jpg";
import Reef from "../images/Reef.JPG";
import Zeph from "../images/Zeph.JPEG";
import engbuilding from "../images/Engbuilding.jpg";
import Box from "@mui/material/Box";
// import { FormatQuoteRounded } from "@mui/icons-material";
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid } from "@mui/material";


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

        <Box class="relative rounded ">
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
    
      <div class="max-w-full pt-2 rounded shadow-2xl mb-8">

        <Box class="text-white rounded text-center text-3xl text-white 
                    bg-gradient-to-r from-green-500 to-black">
          <div class=" text-6xl mb-6 mb-6">Pillars of The SUMMIT</div>
         
         <div class="pl-4">
          <Grid container spacing={2}>
            <Grid xs={6} md={6}>
              <div class="bg-gradient-to-r from-green-500 to-black w-auto h-60 text-white"> Spiritual </div>
            </Grid>
            <Grid xs={6} md={6}>
              <div class="bg-black w-auto h-60 text-white"> Intelectual </div>
            </Grid>
            <Grid xs={6} md={6}>
              <div class="bg-black w-auto h-60 text-white"> Emotional </div>
            </Grid>
            <Grid xs={6} md={6}>
              <div class="bg-gradient-to-l from-green-500 to-black w-auto h-60"> Physical </div>
            </Grid>
          </Grid>

          </div>
          {/* <Accordion>
            <AccordionSummary class=""
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header">
              <Typography>Intelectual</Typography>
            </AccordionSummary>
            <AccordionDetails class="" >
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
          </Accordion> */}
        
         
        </Box> 
      </div>

      <div class="text-center mt-2 mb-2">
        <h1 class="mb-4 text-6xl font-bold text-blue-900">Testimonials!</h1>
    </div>

      <div>
        <Grid container spacing={2}>
          <Grid item xs={6} md={3}>
                <div class="bg-white p-3 text-center rounded box"><img class="img-responsive rounded w-full h-48" src={rosby1} alt="Ros"/>
                  <p class="mb-4 text-justify pr-2 pl-2">
                    Being a member of the summit helped me find my feet at old dominion University when I first go there.
                    It gave me the opportunit to meet friends who were willing to put in the effort and do what it takes
                    to be successful and so that made me work harder. The friendliness and mentorship of the leaders motivated
                    me alot. I'm glad to have been 
                    a member of the summit. 
                    <div class=" text-right text-2xl" > "Rosby Asiamah" </div>
                  </p>
                </div>
            </Grid>
          
          <Grid item xs={6} md={3}>
                <div class="bg-white p-3 text-center rounded box"><img class="img-responsive rounded w-full h-48" src={Reef} alt="reef"/>
                  <p class="mb-4 text-justify pr-2 pl-2">
                  The summit…, where can I start. The summit benefited me in so many ways. I met a group of young brothers with 
                  goals and aspirations just like me and together we all strived to achieve these goals. I'd day that I met family away from 
                  family. There was never a doll moments with these guys from playing soccer to going to the gym. I met a great 
                  mentor Dr. Muchiri. who on countless times has been there for me always. He knew what to say to me guided me 
                  through my education and my spiritual beliefs as well. Couldn’t thank him enough and all the brothers and 
                  sisters I met throught my time at ODU.
                  <div class=" text-right text-2xl" > "Shareef Donkor" </div>
                  </p>
                </div>
            </Grid>
          
            <Grid item xs={6} md={3}>
                <div class="bg-white p-3 text-center rounded box"><img class="img-responsive rounded w-full h-48" src={Zeph} alt="Zeph"/>
                  <p class="mb-4 text-justify pr-2 pl-2">
                    Being a part of the Summit has been a blessing that I intend to share with others. As a freshman, I came into 
                    college with an unstable mindset and no direction on where my future would be. I had no idea that a simple 
                    invitation to join what was then a little study group, would have molded me into the man I am today. I was 
                    invited to join not a group, but a family that built me ground-up in the areas of confidence and virtues. 
                    Knowing there are students out there who can have a chance at an amazing college experience through the Summit 
                    honestly brings me immense joy. I currently hold a job as engineer in the industry and am able to display the 
                    professionalism, work ethic, and wisdom that the Summit engraved in me. My time at ODU was truly efficient and 
                    the Summit was the key component to that. It is an organization that I encourage everyone of all backgrounds and 
                    upbringings to join.
                    <div class=" text-right text-2xl" > "Zeph" </div>
                  </p>
                </div>
            </Grid>

        </Grid>
      </div>

    </div>
  )
};
