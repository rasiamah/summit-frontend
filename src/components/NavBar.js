import React from "react"
import { NavLink } from "react-router-dom";
import SvgIcon from '@material-ui/core/SvgIcon';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';


function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

export default function NavBar() {
    return (
        <header className="bg-gray-800">
            <div className=" container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact 
                     activeClassName=""
                     className="inline-flex items-center py-6 px-3 mr-5 text-white hover:text-green-800 text-4xl font-bold cursive tracking-widest">
                       <HomeIcon  style={{ fontSize: 50 }}/> THE SUMMIT
                    </NavLink>
                    
                    <NavLink to="/about"
                    activeClassName=""
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-green-500 hover:text-green-800">
                        <PermIdentityIcon/>About SUMMIT!
                    </NavLink>

                    <NavLink to="/other"
                    activeClassName=""
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-green-500 hover:text-green-800">
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