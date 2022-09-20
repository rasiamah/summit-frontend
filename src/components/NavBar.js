import React from "react"
import { NavLink } from "react-router-dom";
// import logo from "../images/logo.JPG";


export default function NavBar() {
    return (
        <header class="bg-black">
            <div class=" sticky container mx-auto flex justify-between sticky-top">
                <nav className="flex">
                    <NavLink to="/" exact
                     className="inline-flex items-center ml-4 text-white p-2  
                     text-3xl font-mono cursive tracking-widest mt-6 mb-6 ">
                    {/* <img src={logo} alt="summit-logo" width="140" class="d-inline-block align-text-top"/> */}
                    <span class="hover:bg-blue-900 rounded p-2 ">Home </span>
                    </NavLink>

                    <NavLink to='/whatwedo'
                    activeClassName='inline-flex items-center p-2 text-white'
                    className="inline-flex items-center p-2 text-white ">
                       <span class="hover:bg-blue-900 rounded p-2 ">What we do </span>
                    </NavLink>

                    <NavLink to="/programs"
                    activeClassName=""
                    className="inline-flex items-center p-2 text-white">
                        <span class="hover:bg-blue-900 rounded p-2 ">Programs</span>
                    </NavLink>
                    
                    <NavLink to="/about"
                    activeClassName=""
                    className="inline-flex items-center p-2 text-white">
                    <span class="hover:bg-blue-900 rounded p-2 ">About Us</span>
                    </NavLink>

                    <NavLink to="/partners"
                    activeClassName=""
                    className="inline-flex items-center p-2 text-white ">
                        <span class="hover:bg-blue-900 rounded p-2 ">Partners </span>
                    </NavLink>
                    
                </nav>
                {/*secttion to create contact*/}
                
                <div class="inline-flex text-white py-3 px-3 space-x-6 pr-6 my-6">

                    <NavLink to="/meettheteam"
                        activeClassName=""
                        className=" items-center p-2 mt-6 mb-6 pr-2 pl-2 hover:bg-blue-900 rounded">
                           {/*<GroupsIcon/>*/}Meet The Team 
                    </NavLink> 

                    <NavLink to="/contact"
                        activeClassName=""
                        className=" items-center p-2 mt-6 mb-6 pr-2 pl-2 hover:bg-blue-900 rounded">
                           {/*<AlternateEmailOutlinedIcon/>*/}Contact 
                    </NavLink>                       
                </div>
            </div>
        </header>
    )
}