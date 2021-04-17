import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../images/me2.jpg';


const Stark=()=>{
       return(
        <>
         <section id="header" className="d-flex align-items-center">
         <div className="container-fluid ">
            <div className='row'>
            <div className="col-10 mx-auto">
            <div className="row">
            <div className="col-md-6 pt-5 pt-lf-0 order-lg-1 d-flex justify-content-center flex-column">
                
            <section className="home" id="home">
                <div className="max-width">
                <div className="home-content">
                <div className="text-1">
                Hello, my name is</div>
                <div className="text-2">
                Pravesh Kumar</div>
                <div className="text-3">
                And I'm a <span className="typing">Web Developer </span></div>
                
                <NavLink activeClassName='menu_active' exact className="nav-link" to="/Contact">
                Contact me</NavLink>
                </div>
                </div>
            </section>
                
             
                </div>
               
                 <div className="me col-lg-6 order-1 order-lg-2 header-img">
                    <img src={web} className="img-fluid animated" alt="Common img" />
                </div> 
        
            </div>
            </div>
	        </div>
	        </div>         
         </section>
        </>
        
    );
};

export default Stark;