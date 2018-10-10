import React, { Component } from "react";
import logo from "./logo.png";
import { NavLink } from "react-router-dom";
import "./bootstrap.min.css";
import "./bootstrap.css";
import "./Navbar.css";
import "./mdb.min.css";

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark indigo darken-4 fixed-top font-weight-bold mb-5 ">
        <div className="container">
          <div className="left-header  ml-auto mt-2 mt-lg-0 pr-5">
            <NavLink className="navbar-brand" to="/">
            <div className="font-bold white-text">
              BAM
            </div>
            </NavLink>
            
          </div>
          <button
            className="navbar-toggler hidden-lg-up"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav  nav-fill w-100 ml-auto mt-2 mt-lg-0">
               <li className="nav-item">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </li> 
              <li className="nav-item">
                <NavLink className="nav-link" to="/Features">
                 Features
                </NavLink>
              </li>
              
              <li className="nav-item">
               
              </li>
              <li className="nav-item">
              <form class="form-inline  w-100 my-2 my-lg-0 ml-5 ">
            <input class="form-control mr-sm-2" type="text" placeholder="Search "/>
                                
                               
            <button class="btn btn-info btn-rounded btn-sm my-2 my-sm-0 waves-effect waves-light" type="submit">Search </button>
            </form>
            </li>
             
            </ul>
            <NavLink className="nav-link" to="/Login">
           Login
          </NavLink>
            

          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
