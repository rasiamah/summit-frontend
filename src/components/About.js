import React from "react";
import Box from '@mui/material/Box'; 
import kev from '../images/Kev.jpg' 

export default function About() {
  return (
   <div class="position-relative min-h-screen p-2">
    <Box class="position-static rounded max-w-full min-h-screen bg-gray-200 shadow-2xl">
    <div class="grid grid-cols-3 bg-black">
      <div>
      <img src={kev} alt="dr. Kevin" class="rounded "/>
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

    </div>
    <div class="text-white bg-blue-300 text-center mt-2">MEET THE TEAM

    </div>
    <div class="text-white bg-blue-300 text-center mt-2">BOARD OF DIRECTORS

    </div>
    </Box>
  </div>
  );
}
