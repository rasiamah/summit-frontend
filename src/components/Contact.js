import React from "react";
import Box from '@mui/material/Box'; 
import graduation from "../images/graduation.jpg"

export default function Contact() {
  return (
   <div class="p-6" style={{backgroundImage: `url(${graduation}`, backgroundSize:"cover", height:"100%"}}>
    <div class="p-6 position-static rounded max-w-full min-h-screen bg-black bg-opacity-40 shadow-2xl" >
      <div class="text-white grid grid-cols-2 p-1 rounded max-w-full bg-black bg-opacity-20 shadow-2xl ">
      <Box class="p-6 w-1/2 text-center bg-red-200" item xs={4}>
        <h1 class="text-3xl italic font-mono cursive tracking-widest text-center">Contact us</h1>
        <p>Need to get in touch with us? </p>
        <p class="italic">Either fill out the form with your inquiry or use out email
          to send us a direct message about your concern.
        </p>
      </Box>
      <Box class="p-6 w-full bg-blue-300" item sx={8}>
      <form>
        <div class="row">
          <div class="col">
            Firstname  
            <input type="text" class="form-control" placeholder="First name"/>
          </div>
          <div class="col">
            Lastname  
            <input type="text" class="form-control" placeholder="Last name"/>
          </div>
        </div>
      </form>
      <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
    </div>
  </div>

    
 
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
      </Box>
      </div>
    </div>
  </div>
  );
}
