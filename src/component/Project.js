import React from 'react';
import web11 from '../images/cc1.jpg';
import web12 from '../images/cc2.png';
import web13 from '../images/cc3.jpg';
import web from '../images/c1.jpg';
import web1 from '../images/c2.jpg';
import web2 from '../images/c3.jpg';
import GitHubIcon from '@material-ui/icons/GitHub';

const Project=()=>{
    return(
        <>
        <section id="header">
            <div className="container-fluid ">
            <div className='row'>
            <div className="col-10 mx-auto">
            <div className="row">

            <div className="card">
                <img src={web11} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">MANAGING-EXPENSES</h5>
                    <p className="card-text">Managing Monthly Expenses Project In which add your Income and Expense and Your Total Balance and History of Transection.</p>
                    <a className="btn btn-get-started1" href="https://github.com/praveshstark/Managing-Expenses" target="_blank">
                    <GitHubIcon/> GitHub
                    </a>
                </div>
            </div>

            <div className="card">
                <img src={web12} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">WEATHER WEBSITE</h5>
                    <p className="card-text">Weather Report project is a website through which you will
                                         able to get all the reports related to weather forecasting of 
                                         any locations.
                    </p>
                    <a className="btn btn-get-started1" href="https://github.com/praveshstark/Weather-Website" target="_blank">
                    <GitHubIcon/> GitHub
                    </a>
                </div>
            </div>

          
            <div className="card">
                <img src={web} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">SINCERE</h5>
                    <p className="card-text">Introduction of my College Group-SINCERE and show Some Madness Memories throgh Photos.This site is Developed by using ReactJs and CSS.</p>
                    <a className="btn btn-get-started1" href="https://github.com/praveshstark/Reactsite-Sincere" target="_blank">
                    <GitHubIcon/> GitHub
                    </a>
                </div>
            </div>

            <div className="card">
                <img src={web1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">MEME MARKETPLACE</h5>
                    <p className="card-text">Decentralized Meme Marketplace uses this technology to
                    achieve its goal of decentralising the creators creativity.</p>
                    <a className="btn btn-get-started1" href="https://github.com/praveshstark/Meme-Marketplace-1" target="_blank">
                    <GitHubIcon/> GitHub
                    </a>
                </div>
            </div>

            <div className="card">
                <img src={web2} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">RAILWAY MANAGEMENT SYSTEM</h5>
                    <p className="card-text">Mini Railway Management System.This is similar to IRCTC(Indian Railway Catering and Tourism Corporation) Site . </p>
                    <a className="btn btn-get-started1" href="https://github.com/yashagrawal3107/Railway-Management-System-Dbms" target="_blank">
                    <GitHubIcon/> GitHub
                    </a>
                </div>
            </div>


            <div className="card">
                <img src={web13} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">MOBILE REVIEW BLOG</h5>
                    <p className="card-text">Best Mobile Review Blog with Best Offer , Best Discounted Mobile , and which Mobile is in Trending  and Latest news in Market .  </p>
                    <a className="btn btn-get-started1" href="https://github.com/yashagrawal3107/Railway-Management-System-Dbms" target="_blank">
                    <GitHubIcon/> GitHub
                    </a>
                </div>
            </div>
           
            </div>
            </div>
            </div>
            </div>
            </section>
        </>
    );
};

export default Project;