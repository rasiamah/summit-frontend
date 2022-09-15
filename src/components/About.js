
import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import kev from '../images/Kev.jpg'; 
import Ros from '../images/ROSBY.jpg';
import Kof from '../images/Kofi.png'; 
import one from '../images/boy.jpg';
import two from '../images/girl.jpg';
import three from '../images/green.jpg';
import four from '../images/guy.jpg';
import five from '../images/pic1.jpg';
import six from '../images/red.jpg';
import seven from '../images/smile.jpg';

export default function About() {
  return (
   <div class="position-relative min-h-screen p-2">
    <Box class="position-static rounded max-w-full min-h-screen bg-gray-200 shadow-2xl">

    <div class="text-center p-2 rounded">
      <h1 class ="text-4xl font-bold text-center"> MEET <span class="text-blue-900">THE TEAM </span></h1>
      <p class= "text-1xl text-bold text-center p-2">We're a growing collective of dreamers
       and doers united by a shared mission empowering people to reach their full potential.</p>
    </div>

   

    <div class="text-center p-4 mb-2 rounded">
        <h1 class="text-4xl font-bold text-center ">BOARD OF DIRECTORS</h1>
    </div>

    <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
        <div class="bg-white p-3 text-center rounded box"><img class="img-responsive rounded w-full h-48" src={one} alt=""/>
                    <h5 class="mt-3 name">Samuel Plamer</h5><span class="work d-block">Title </span> 
                    <div class="mt-4">
                        <h6 class="v-profile">View Profile</h6>
                    </div>
                </div>
        </Grid>
        <Grid item xs={6} md={3}>
        <div class="bg-white p-3 text-center rounded box"><img class="img-responsive rounded w-full h-48" src={two} alt=""/>
                    <h5 class="mt-3 name">Samuel Plamer</h5><span class="work d-block">Title </span> 
                    <div class="mt-4">
                        <h6 class="v-profile">View Profile</h6>
                    </div>
                </div>
        </Grid>
        <Grid item xs={6} md={3}>
        <div class="bg-white p-3 text-center rounded box"><img class="img-responsive rounded w-full h-48" src={three} alt=""/>
                    <h5 class="mt-3 name">Samuel Plamer</h5><span class="work d-block">Title </span> 
                    <div class="mt-4">
                        <h6 class="v-profile">View Profile</h6>
                    </div>
                </div>
        </Grid>
        <Grid item xs={6} md={3}>
        <div class="bg-white p-3 text-center rounded box"><img class="img-responsive rounded w-full h-48" src={four} alt=""/>
                    <h5 class="mt-3 name">Samuel Plamer</h5><span class="work d-block">Title </span> 
                    <div class="mt-4">
                        <h6 class="v-profile">View Profile</h6>
                    </div>
                </div>
        </Grid>
        <Grid item xs={6} md={3}>
        <div class="bg-white p-3 text-center rounded box"><img class="img-responsive rounded w-full h-48" src={five} alt=""/>
                    <h5 class="mt-3 name">Samuel Plamer</h5><span class="work d-block">Title </span> 
                    <div class="mt-4">
                        <h6 class="v-profile">View Profile</h6>
                    </div>
                </div>
        </Grid>
    </Grid>

    <div class="text-center mt-2 mb-2">
        <h1 class="mb-4 text-4xl font-bold">TECHNICAL TEAM</h1>
    </div>
    <Grid container spacing={2} >
        <Grid item xs={6} md={3}>
                <div class="bg-white p-3 text-center rounded box"><img class="img-responsive rounded w-full h-48" src={Ros} alt="Ros"/>
                    <h5 class="mt-3 name">Rosby Asiamah</h5><span class="work d-block">Software / Web Developer</span><span class="work d-block"></span>
                    {/* <div class="mt-4 about"><span>is a long established fact that eader&nbsp; will be distracted by the readable content.</span></div> */}
                    <div class="mt-4">
                        <h6 class="v-profile">Linkedin Profile</h6>
                    </div>
                </div>
            </Grid>
            <Grid item xs={6} md={3}>
                <div class="bg-white p-3 text-center rounded box"><img class="img-responsive rounded w-full h-48" src={Kof} alt="Kof"/>
                    <h5 class="mt-3 name">Kofi Adutwum</h5><span class="work d-block">Application Developer</span><span class="work d-block"></span>
                    {/* <div class="mt-4 about"><span>is a long established fact that eader&nbsp; will be distracted by the readable content.</span></div> */}
                    <div class="mt-4">
                        <h6 class="v-profile">LinkedIn Profiel</h6>
                    </div>
                </div>
            </Grid>
            <Grid item xs={6} md={3}>
                <div class="bg-white p-3 text-center rounded box"><img class="img-responsive rounded w-full h-48" src={six} alt="Mel"/>
                    <h5 class="mt-3 name">Melvin Kamara</h5><span class="work d-block">UI/UX Designer</span><span class="work d-block"></span>
                    {/* <div class="mt-4 about"><span>is a long established fact that eader&nbsp; will be distracted by the readable content.</span></div> */}
                    <div class="mt-4">
                        <h6 class="v-profile">LinkedIn Profile</h6>
                    </div>
                </div>
            </Grid>
        </Grid>

        <div class="pt-12 pb-8">
          <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
               <h1 class="font-bold text-2xl text-center"> Growth at <span class="text-blue-900">THE SUMMIT</span></h1>
               <p class="text-center" >We are assembling a force for meaningful change.</p>
            </Grid>
            <Grid item xs={6} md={4} class="pr-6">
               <Box class="bg-blue-900 p-4 rounded text-center">
                <span class="text-white font-extrabold text-4xl">Join the team</span>
                </Box>
            </Grid>
          </Grid>
        </div>



        <div class="grid grid-cols-3 bg-black">
      <div>
      <img src={kev} alt="dr. Kevin" class="rounded pt-16 pl-3"/>
      <div class="text-white text-4xl text-bold italic text-center">Founder:</div>
      </div>
      <div class="col-span-2 bg-black p-2 text-justify text-white">
        <div class="text-3xl text-bold text-center m-2">Kevin W. Muchiri, Ph.D., PMP</div>

        <p class="italic text-bold m-2">Dr. Kevin Muchiri is the Founder and Director of The SUMMIT Mentoring Program. 
        He founded The SUMMIT while working on his doctoral studies in Engineering Management
        and Systems Engineering at the Old Dominion University, Virginia. Throughout his studies,
        he had noticed that several black students were either dropping out of STEM programs or 
        entirely out of college for lack of motivation for the subject or other reasons, hence the 
        inspiration for starting the program. As Founder, he is committed to ensuring that young black
        students fulfill their academic desires and proceed to the next steps in their journeys.</p>

        <p class="italic m-2">Before the formation of the summit, Dr. Muchiri had mentored people from different states,
        including Georgia,Maryland, and North Carolina, while based in Norfolk, Virginia, and even 
        in other countries such as his home country, Kenya, and its neighbors Uganda and Tanzania.</p>

        <p class="italic m-2">During the first-year orientation at Old Dominion University in 2017, he met a few incoming
        first-generation Black students and realized the dire need. This relationship continued to 
        form the pioneering class of The SUMMIT Program, which increased to 22 by the end of their first 
        semester in college, as they kept referring their friends to join the program.
        The SUMMIT program can now boast of having graduated over 100 students in various STEM programs, a 98% 
        retention rate for students, and an over 300% increase in membership since the formal start of the
        SUMMIT program.</p>

        <p class="italic m-2">The SUMMIT Mentoring seeks to develop and connect first-generation black students in high schools
        and colleges through mentoring for future success. The program targets four faculties of growth:
        Intellectual, Emotional, Spiritual and Physical development.</p>
      </div>
    </div>
    <div class="text-white bg-blue-300 text-center mt-2">THE SUMMIT JOURNEY

        <p>Talk about whet ever the summit journeyy has been over the past few years.</p>

    </div>
    </Box>
  </div>
  );
}
