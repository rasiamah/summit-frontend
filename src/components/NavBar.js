import React from "react"
import { NavLink } from "react-router-dom";
import logo from "../images/logo.JPG";


export default function NavBar() {
    return (
        <header class="bg-black">
            <div class=" sticky container mx-auto flex justify-between sticky-top">
                <nav class="flex">
                    <NavLink to="/" exact 
                     activeClassName=""
                     className="inline-flex items-center py-1 px-1 mr-4 text-white hover:text-blue-400 
                     text-3xl italic font-mono cursive tracking-widest">
                    <img src={logo} alt="summit-logo" width="140" class="d-inline-block align-text-top"/>
                    </NavLink>

                    <NavLink to='/whatwedo'
                    activeClassName=''
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-blue-400">
                        {/*<QuestionAnswerTwoToneIcon/>*/}What we do
                    </NavLink>

                    <NavLink to="/programs"
                    activeClassName=""
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-blue-400">
                        {/*<EventAvailableTwoToneIcon/>*/}Programs
                    </NavLink>
                    
                    <NavLink to="/about"
                    activeClassName=""
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-blue-400">
                        {/*<PermIdentityIcon/>*/}About SUMMIT!
                    </NavLink>

                    <NavLink to="/partners"
                    activeClassName=""
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-blue-400">
                        {/* <HandshakeOutlinedIcon/>*/}Partners
                    </NavLink>
                    
                </nav>
                {/*secttion to create contact*/}
                
                <div class="inline-flex text-white py-3 px-3 space-x-6 pr-6 my-6">

                    <NavLink to="/meettheteam"
                        activeClassName=""
                        className=" items-center p-2 rounded hover:text-blue-400">
                           {/*<GroupsIcon/>*/}Meet The Team 
                    </NavLink> 

                    <NavLink to="/contact"
                        activeClassName=""
                        className=" items-center p-2 rounded hover:text-blue-400">
                           {/*<AlternateEmailOutlinedIcon/>*/}Contact 
                    </NavLink>                       
                </div>
            </div>
        </header>
    )
}