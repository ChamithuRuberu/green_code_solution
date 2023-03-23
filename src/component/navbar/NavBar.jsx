import React from 'react'
import {NavLink} from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './NavBar.css'
import Technology from "../../pages/technology/Technology";

const NavBar = () => {
  return (
    <>
    <header>
    <div className="container-flex">
        <div className="logocontainer">
            <NavLink to="/">
            <img src="/images/logo.png" alt="noo"className="logo"/>
            <p className="logoT">Green code Solution(PVT)Ltd</p>
            </NavLink>
        </div>
        <nav>
            <div className="list">
                <NavLink exact to="/" className="listItem">Home</NavLink>
                <NavLink to="/AboutUs"className="listItem" aria-activedescendant="active">About Us</NavLink>
                <NavLink to="/Services"className="listItem">Services</NavLink>
                <NavLink to="/Projects"className="listItem">Projects</NavLink>
                <NavLink to="/Contact"className="listItem">Contact</NavLink>
                <NavLink to="/Technology"className="listItem">Technology</NavLink>

            </div>
        </nav>
        <div className="icons">
            <NavLink to=""> <FacebookIcon className="icon"/></NavLink>
            <NavLink to="">  <InstagramIcon className="icon"/></NavLink>
            <NavLink to="">  <LinkedInIcon className="icon"/></NavLink>
            <NavLink to=""> <YouTubeIcon className="icon"/></NavLink>
        </div>
      </div>
    </header>
   </>
  )
}

export default NavBar;