import React from "react"
import { NavLink } from "react-router-dom";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import QuestionAnswerTwoToneIcon from '@mui/icons-material/QuestionAnswerTwoTone';
import EventAvailableTwoToneIcon from '@mui/icons-material/EventAvailableTwoTone';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import logo from "../images/logo.JPG";


export default function NavBar() {
    return (
        <header className="bg-black">
            <div className=" sticky container mx-auto flex justify-between sticky-top">
                <nav className="flex">
                    <NavLink to="/" exact 
                     activeClassName=""
                     className="inline-flex items-center py-1 px-1 mr-4 text-white hover:text-green-800 
                     text-3xl italic font-mono cursive tracking-widest">
                    <img src={logo} alt="summit-logo" width="140" class="d-inline-block align-text-top"/>
                    </NavLink>

                    <NavLink to='/whatwedo'
                    activeClassName=''
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-green-800">
                        <QuestionAnswerTwoToneIcon/>What we do
                    </NavLink>

                    <NavLink to="/programs"
                    activeClassName=""
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-green-800">
                        <EventAvailableTwoToneIcon/>Programs
                    </NavLink>
                    
                    <NavLink to="/about"
                    activeClassName=""
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-green-800">
                        <PermIdentityIcon/>About SUMMIT!
                    </NavLink>

                    <NavLink to="/partners"
                    activeClassName=""
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-green-800">
                        <HandshakeOutlinedIcon/>Partners
                    </NavLink>
                    
                </nav>
                {/*secttion to create contact*/}
                
                <div className="inline-flex text-white py-3 px-3 space-x-6 pr-20 my-6">
                    <NavLink to="/contact"
                        activeClassName=""
                        className=" items-center rounded hover:text-green-800">
                           <AlternateEmailOutlinedIcon/>Contact 
                    </NavLink>                       
                </div>
            </div>
        </header>
    )
}