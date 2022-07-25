import React from "react"
import { NavLink } from "react-router-dom";
//import { SocialIcon } from "react-social-icons";
//import LinkedInIcon from '@material-ui/icons/LinkedIn';
//import GitHubIcon from '@material-ui/icons/GitHub';
//import {Box, Link, Typography} from '@material-ui/core';
import SvgIcon from '@material-ui/core/SvgIcon';
//import AccountTreeIcon from '@material-ui/icons/AccountTree';
//import ReceiptIcon from '@material-ui/icons/Receipt';


function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

export default function NavBar() {
    return (
        <header className="bg-gray-900">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact 
                     activeClassName="text-white"
                     className="inline-flex items-center py-6 px-3 mr-5 text-red-800 hover:text-green-800 text-4xl font-bold cursive tracking-widest">
                       <HomeIcon  style={{ fontSize: 50 }}/> THE SUMMIT
                    </NavLink>
                    
                    <NavLink to="/about"
                    activeClassName="text-green-100 bg-red-900"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800">
                        About SUMMIT!
                    </NavLink>

                    <NavLink to="/other"
                    activeClassName="text-green-100 bg-red-900"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800">
                        Other!
                    </NavLink>

                </nav>
                {/*secttion to create search bar*/}
                <div className="inline-flex  text-white py-3 px-3 space-x-6 pr-20 my-6"> SearchBarHereIfNeeded                   
                </div>
            </div>
        </header>
    )
}