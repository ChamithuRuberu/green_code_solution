import React from "react";
import "./Footer.css";
import {NavLink} from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CallIcon from '@mui/icons-material/Call';
function Footer() {
    return (
        <div className="main-footer">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h4>SERVICES WE OFFER</h4><br/>
                        <ul className="list-unstyled">
                            <li><NavLink exact to="/" className="list-Item">Web Application Development</NavLink></li>
                            <li><NavLink to="/AboutUs"className="list-Item" aria-activedescendant="active">Mobile / App Development</NavLink></li>
                            <li><NavLink to="/Services"className="list-Item">Embedded System Development</NavLink></li>
                            <li><NavLink to="/Projects"className="list-Item">IT Consulting</NavLink></li>
                            <li><NavLink to="/Contact"className="list-Item">Quality Assurance</NavLink></li>
                            <li><NavLink to="/Contact"className="list-Item">Business Analysis</NavLink></li>
                            <li><NavLink to="/Contact"className="list-Item">Software Testing</NavLink></li>
                        </ul>

                    </div>

                    {/* Column2 */}
                    <div className="col">
                        <h4>QUICK LINKS</h4><br/>
                        <ul className="list-unstyled">
                            <li><NavLink exact to="/" className="list-Item">Home</NavLink></li>
                            <li><NavLink to="/AboutUs"className="list-Item" aria-activedescendant="active">About Us</NavLink></li>
                            <li><NavLink to="/Services"className="list-Item">Services</NavLink></li>
                            <li><NavLink to="/Projects"className="list-Item">Projects</NavLink></li>
                            <li><NavLink to="/Contact"className="list-Item">Contact</NavLink></li>
                        </ul>
                    </div>


                    {/* Column3 */}
                    <div className="col">
                        <h4>HAVE QUESTION?</h4><br/>
                        <ui className="list-unstyled">
                            <li><NavLink to=""> <CallIcon className="icon"/><div className="call" >(+94) 75 6934 728</div></NavLink></li>
                             <li><NavLink to="">  <CallIcon className="icon"/><div className="call" >(+94) 75 6934 728</div></NavLink></li>
                        </ui>
                    </div>

                    <div className="col">
                        <h4>Connect With Us</h4><br/>
                        <div className="icons">
                            <NavLink to=""> <FacebookIcon className="icon"/></NavLink>
                            <NavLink to="">  <InstagramIcon className="icon"/></NavLink>
                            <NavLink to="">  <LinkedInIcon className="icon"/></NavLink>
                            <NavLink to=""> <YouTubeIcon className="icon"/></NavLink>
                            <br/>
                            <br/>
                        </div>

                        <h1 className="list-unstyled">
                            <li>(+94) 756934 728</li>
                            <li>14/7 Gangarama Road,Wewala,Piliyandala</li>
                            <li>Colombo,10300</li>
                        </h1>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Green code Solution(PVT)Ltd | All rights reserved |
                        Terms Of Service | Privacy
                    </p>
                </div>

        </div>
    );
}

export default Footer;