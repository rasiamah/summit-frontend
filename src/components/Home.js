
import * as React from "react";
import  {useEffect, useState } from 'react';
import rosby1 from "../images/ROSBY.jpg";
import Reef from "../images/Reef.JPG";
import Zeph from "../images/Zeph.JPEG";
import Moy from "../images/Moy.jpeg";
import engbuilding from "../images/Engbuilding.jpg";
import hands from "../images/hands.jpg";
import  stadium  from "../images/stadium.jpg";
import broderick from "../images/broderick.jpg";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VideoPlay from "./video/VideoPlay";

// import { FormatQuoteRounded } from "@mui/icons-material";
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid } from "@mui/material";

const images = [engbuilding,hands,broderick,stadium];

const text = [
  <p>
    " The Summit has benefited me in so many ways. There were members and friends that helped me find the right 
    classes to take every semester. The Summit also provided a support system for anyone who were going through 
    tough situations in and out of school. Study sessions for student were also created to help students progress
    in their classes. Not only were study sessions held but we had guest speakers come to talk to us about self
    improvement when it came to finances and personal health. We also made time to also enjoy each other’s company
    outside of school whether it was playing sports at the ODU gym or going to the movies. This environment helped 
    me grow and improve as a student and a man. The relationship I built with Dr. Kevin Muchiri and all the members 
    in the Summit has really shaped the person I am today. Being apart of the Summit for the past 5 years gave me 
    memories and great moments that I will cherish for a lifetime." <br/><br/>
    <span class="text-2xl font-bold text-right" >" Micheal Asante "</span>
  </p>,

  <p> " Being a member of the summit helped me find my feet at old dominion University when I first go there.
  It gave me the opportunit to meet friends who were willing to put in the effort and do what it takes
  to be successful and so that made me work harder. The friendliness and mentorship of the leaders motivated
  me alot. I'm glad to have been a member of the summit. "<br/><br/>
  <span class="text-2xl font-bold text-right" >" Rosby Asiamah "</span>
  </p>,

  <p>" Being a part of the Summit has been a blessing that I intend to share with others. As a freshman, I came into 
  college with an unstable mindset and no direction on where my future would be. I had no idea that a simple 
  invitation to join what was then a little study group, would have molded me into the man I am today. I was 
  invited to join not a group, but a family that built me ground-up in the areas of confidence and virtues. 
  Knowing there are students out there who can have a chance at an amazing college experience through the Summit 
  honestly brings me immense joy. I currently hold a job as engineer in the industry and am able to display the 
  professionalism, work ethic, and wisdom that the Summit engraved in me. " <br/><br/>
  <span class="text-2xl font-bold text-right" >" Zeph Amonoo-Harrison "</span>
  </p>
  
];

export default function Home() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexText, setCurrentIndexText] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if(currentIndex === images.length - 1) {
                setCurrentIndex(0);
            } 
            else {
                 setCurrentIndex(currentIndex + 1);
            }
        }, 10000)
        
        return () => clearInterval(intervalId);
    }, [currentIndex])

    useEffect(() => {
      const intervalId = setInterval(() => {
          if(currentIndexText === text.length - 1) {
              setCurrentIndexText(0);
          } 
          else {
               setCurrentIndexText(currentIndexText + 1);
          }
      }, 17000)
      
      return () => clearInterval(intervalId);
  }, [currentIndexText])

  return (
     <div class=" min-h-screen p-2 grid {*bg-gradient-to-r from-green-500 to-blue-500*}" >
      

      <Box class="text-white rounded mb-6">
        <VideoPlay />     
      </Box>
                
      <div class="grid lg:grid-cols-2 sm:grid-cols-1 container rounded max-w-full mb-6" > 
        <Box class="p-4 grid place-items-center rounded" style={{backgroundImage: `url(${images[currentIndex]}`, 
          backgroundSize:"cover", height:"100%"}}>
          <div class="p-2 text-3xl font-bold text-center font-bold shadow-4xl  text-white bg-black bg-opacity-60 rounded">
            <span class="text-blue-900">Motto:</span> "Pomaja Twaweza"
          </div>
          <div class="p-2 rounded font-bold text-center text-justify shadow-4xl text-white bg-black bg-opacity-60 italic">
            <strong>Mission:  </strong>Developing and connecting first-generation Black students
                     through mentoring for future success.
          </div>
          <div class="p-2 rounded font-bold text-center text-justify bg-black text-white bg-opacity-60 italic">
            <strong>Vission: </strong>To build intellectuals with confidence and equip them with 
                skills needed to make a difference in the future.
          </div>
          <div class="p-2 rounded font-bold text-center text-left shadow-4xl bg-black text-white  bg-opacity-60 italic">
            <strong>Values: </strong>Academic Excellence, Moral Integrity, Selflessness, 
              Servitude, Sportsmanship, Fellowship, Discipline, Accountability, and Commitment.
          </div>
        </Box>

        <Box class="p-4 rounded sm:hidden lg:block bg-gradient-to-r from-black to-blue-500 item-center">
        {/* <img src={engbuilding} alt="engbuilding" class="top-6 rounded w-full"/> */}
        <div class="text-center text-white font-bold text-2xl p-4">What people have to say about the summit</div>
          <div class="text-justify p-4 text-white flex">{text[currentIndexText]}</div>
        </Box>
      </div>





     
        <h1 class="text-center font-bold text-6xl text-black mt-20"> Our <span class="text-blue-900">Mission</span></h1>
        <Box class="text-black text-center ">
          <p class="mb-4 text-1xl text-justify sm:pr-6 sm:pl-6 lg:pr-64 lg:pl-64">
              Our sole mission is to develop and connect first-generation students through mentoring, physical and spiritual
              training for current and future successes as they move through life. Most poeple need guidance in their journey
              through life and the summit makes sure to provide that for students that needs it. All it takes is to make yourself 
              and the summit will do the rest. 
          </p>
        </Box>
        <h1 class="text-center font-bold text-6xl text-black mt-10"> Our <span class="text-blue-900">Vision</span></h1>
        <Box class="text-black text-center">
          <p class="mb-4 text-1xl text-justify sm:pr-6 sm:pl-6 lg:pr-64 lg:pl-64">
           In everthing we do, we need confidence and strong sense of faith and at the summit, our vision is to build and impact each intellectual with 
           confidence and equip them with a belief in God which we believe needed to make a difference now and in the future.
          </p>
        </Box>

        <div class="flex justify-center mt-20">
        <span></span>
        <div class="sm:hidden mg:block lg:block relative h-48 w-3/4 my-10 p-6 rounded text-white ">
          <div class="absolute bottom-0 right-0 bg-blue-900 p-2 rounded">
            Selflessness
          </div>
          <div class="absolute top-4 right-4 bg-blue-500 p-2 rounded">
            Academic Excellence
          </div>
          <div class="absolute top-0 left-4 bg-blue-500 p-2 rounded">
            Moral Integrity
          </div>
          <div class="absolute bottom-7 left-8 bg-blue-800 p-2 rounded">
            Servitude
          </div>
          <div class="absolute  left-40 top-16 bg-blue-700 p-2 rounded">
            Sportsmanship
          </div>
          <div class="absolute top-1/2 right-60 bg-blue-800 p-2 rounded">
            Fellowship
          </div>
          <div class="absolute bottom-0 right-80 bg-blue-900 p-2 rounded">
            Discipline
          </div>
          <div class="absolute left-80 top-1/2 bg-white text-blue-800 font-bold p-2 text-4xl rounded shadow">
            TOGETHER WE CAN
          </div>
          <div class="absolute top-18 left-1/2 bg-blue-600 p-2 rounded">
            Commitment
          </div>
          <div class="absolute top-0 right-1/4 bg-blue-900 p-2 rounded">
            Accountability
          </div>
        </div>
        </div>
    
      <div class="max-w-full pt-2 rounded mb-8 mt-20">
        <Box class="text-white rounded text-center text-3xl">
                    {/*bg-gradient-to-r from-blue-500 to-black*">*/}
          <div class="text-6xl text-black font-bold mb-6">Pillars of 
            <span class="text-blue-900"> The SUMMIT
            </span>
          </div>

         <div class="pl-4 mt-10">
          <Grid container spacing={2}>
            <Grid xs={6} md={6}>
              <div class="bg-gradient-to-r from-blue-500 to-black w-auto h-60 text-white"> Spiritual </div>
            </Grid>
            <Grid xs={6} md={6}>
              <div class="bg-black w-auto h-60 text-white"> Intelectual </div>
            </Grid>
            <Grid xs={6} md={6}>
              <div class="bg-black w-auto h-60 text-white"> Emotional </div>
            </Grid>
            <Grid xs={6} md={6}>
              <div class="bg-gradient-to-l from-blue-500 to-black w-auto h-60"> Physical </div>
            </Grid>
          </Grid>
         </div>
        </Box> 
      </div>

      <div class="text-center mt-2 mb-2">
        <h1 class="mb-4 text-6xl font-bold text-blue-900">Testimonials!</h1>
    </div>

       

      <div>
        <Grid container spacing={2}>
        {/* 
        to hid a div in small screen mode do: 
        sx={{display: { xs: "none", md: "block" ,lg: "block" }}}
         */}

        <Grid item xs={6} md={3}  lg={3}>
                <div class="bg-white p-3 text-center rounded box">
                  <img class="img-responsive rounded w-full h-60" src={Moy} alt="Mike"/>
                  <p class="mb-4 text-justify"> 
                    The Summit has definitely benefited me greatly. Meeting the guys I met in the program not only helped me 
                    through my classes but I also became great friends with them beyond college. The Summit helped me become a better 
                    leader, a better friend, and someone who will always strive to improve the community around me.
                    <div class=" text-right text-2xl" > "Moy Joseph" </div>
                  </p>
                </div>
            </Grid> 

          <Grid item xs={6} md={3} lg={3}>
                <div class="bg-white p-3 text-center rounded box">
                  <img class="img-responsive rounded w-full h-60" src={rosby1} alt="Ros"/>
                  <p class="mb-4 text-justify">
                    Being a member of the summit helped me find my feet at old dominion University when I first go there.
                    It gave me the opportunit to meet friends who were willing to put in the effort and do what it takes
                    to be successful and so that made me work harder. The friendliness and mentorship of the leaders motivated
                    me alot. I'm glad to have been 
                    a member of the summit. 
                    <div class=" text-right text-2xl" > "Rosby Asiamah" </div>
                  </p>
                </div>
            </Grid>
          
          <Grid item xs={6} md={3} lg={3}>
                <div class="bg-white p-3 text-center rounded box">
                  <img class="img-responsive rounded w-full h-60" src={Reef} alt="reef"/>
                  <p class="mb-4 text-justify">
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
          
            <Grid item xs={6} md={3} lg={3}>
                <div class="bg-white p-3 text-center rounded box">
                  <img class="img-responsive rounded w-full h-60" src={Zeph} alt="Zeph"/>
                  <p class="mb-4 text-justify ">
                    Being a part of the Summit has been a blessing that I intend to share with others. As a freshman, I came into 
                    college with an unstable mindset and no direction on where my future would be. I had no idea that a simple 
                    invitation to join what was then a little study group, would have molded me into the man I am today. I was 
                    invited to join not a group, but a family that built me ground-up in the areas of confidence and virtues. 
                    Knowing there are students out there who can have a chance at an amazing college experience through the Summit 
                    honestly brings me immense joy. I currently hold a job as engineer in the industry and am able to display the 
                    professionalism, work ethic, and wisdom that the Summit engraved in me. 
                    <div class=" text-right text-2xl" > "Zeph Amonoo-Harrison" </div>
                  </p>
                </div>
            </Grid>

           

            

        </Grid>
      </div>

    </div>
  )
};
