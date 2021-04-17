import React from 'react'
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Contact from './component/Contact';
import About  from './component/About';
import Project from './component/Project';
import { Redirect, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar/>
      <Switch>
      <Route exact path="/Stark" component={Home} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/Contact" component={Contact} />
      <Route exact path="/project" component={Project} />
      {/* <Route exact path="/resume" component={Resume} />  */}
      </Switch>
      <Redirect to="/Home" />    
    </>
  )
}

export default App;
