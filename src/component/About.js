import React from 'react';
import web from '../images/my.jpg';
const About=()=>{
    return(
        <>
        
        <div className="col-10 mx-auto">
          <section className="about" id="about">
           <div className="max-width">
            
            <div className="about-content">
                
                 <div className="column left">
                    <img src={web} alt="pravesh" />
                 </div>

                <h2 className="title"> Hi, I am Pravesh Yadav, <span> nice to meet you!</span></h2>

                <div className="column right"> 
                <div className="text">
                </div>
                <p>I am React Developer and Currently living in Gandhinagar Gujarat (India) and 
                I am Student of Indian Institute of Information Technolgy Vadodara of Passing 
                Batch 2022 from Cse Branch. I am Fitness Freak and and My Hobbies is Playing Cricket
                 , Football and Basketball .</p>
                <a href="https://drive.google.com/file/d/1-FNyupaDcVIWX6taoI7ZLChlyzcnd8jk/view" target="_blank">
                Download Resume</a>
                </div> 

            </div>
            </div>
          </section>      
          </div>
        
               
        </>
    );
};

export default  About;