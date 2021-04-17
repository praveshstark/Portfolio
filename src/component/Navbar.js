import React from 'react';
import { NavLink } from 'react-router-dom';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';

const Navbar=()=>{
    return(
        <>
        
        <div className="container-fluid nav_bg">
            <div className='row'>
            <div className="col-10 mx-auto">
        <nav className="navbar navbar-expand-lg navbar-white bg-transparent">
        <NavLink className="navbar-brand" to="/Stark" >
        sTar<span>Kxx.</span></NavLink>

     <button className="navbar-toggler" 
         type="button" data-toggle="collapse"
         data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
         aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
   
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <NavLink activeClassName='menu_active' exact className="nav-link" to="/Home">
                Home </NavLink>
            </li>
            <li className="nav-item">
                <NavLink activeClassName='menu_active' exact className="nav-link" to="/about">
                About</NavLink>
            </li>
            <li className="nav-item">
                <NavLink activeClassName='menu_active' exact className="nav-link" to="/project">
                Project</NavLink>
            </li>
            <li className="nav-item">
                <NavLink activeClassName='menu_active' exact className="nav-link" to="/resume">Resume
                </NavLink>
            </li>
         {/* <li className="nav-item">
                <NavLink activeClassName='menu_active' exact className="nav-link" to="/blog">
                BloG
                </NavLink>
            </li>*/}
            <li id="insta" className="nav-item">
                <a className="nav-link" href="https://www.instagram.com/stark___xx/" target="_blank">
                <InstagramIcon style={{fontSize:32,color:"	 #ff9999"}}/>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://www.linkedin.com/in/starkxx/" target="_blank">
                <LinkedInIcon style={{fontSize:32,color:"#99bbff"}}/>
                </a>
            </li>
            <li className="nav-item">
                <a   className="nav-link" href="https://twitter.com/starkxx2" target="_blank">
                <TwitterIcon  style={{fontSize:32,color:"#66d9ff"}}/>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://github.com/praveshstark" target="_blank">
                <GitHubIcon style={{fontSize:32,color:"#b3ffb3"}}/>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://www.facebook.com/pravesh.yadav.75286/" target="_blank">
                <FacebookIcon style={{fontSize:34}}/>
                </a>
            </li>

           
        
            </ul>
            
        </div>
        </nav>
        </div>
        </div>
        </div>
    </>
    );
};

export default Navbar;


