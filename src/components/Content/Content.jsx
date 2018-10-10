import React, { Component } from "react";
import "./bootstrap.css";
import "./mdb.min.css";
import "./font-awesome.min.css";
import newpage from "../Content/newpage.jpg";
import "./Content.css";

var CardStyle = {
  backgroundImage: "url(" + newpage + ")"
};

class Content extends Component {
  render() {
    return (
      <div>
      <div className=" animated fadeIn mt-sm-5 mb-sm-5 pt-sm-2">
      <div className="card card-image" style={CardStyle}>
        <div className="mask flex-center rgba-black-strong">
         <div className=" animated fadeIn mt-sm-5 mb-sm-5 pt-sm-4"> 
          <div className=" container-fluid full-bg-img d-flex align-items-center justify-content-center">
            <div className="row d-flex justify-content-center animated   zoomIn ">
              <div className="col-md-10 text-center">
              <h2 className="display-3  font-bold white-text  ">
              Idea Awesome Movies
            </h2>
            <br/>
            <hr className="hr-light" ></hr>

            <h3 className="white-text my-4">Get The Latest Movies</h3>
            <h3 className="white-text my-4">Get The Latest Tv Show</h3>
                <h3 className="white-text my-4">
                  Multiple Investment Solution
                </h3>
                <h3 className="white-text my-4">Asset Disposal</h3>
                <a
                  className="btn btn-deep-orange waves-effect waves-light"
                  href="register.html "
                >
                  <i className="fa fa-clone left" />
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

        <main class="mt-5">
        <div class="container">
        <section id="best-features" class="text-center">
       
        <div class="row">
        <div class="col-md-4 mb-5">
        <i class="fa fa-camera-retro fa-4x orange-text"></i>
        <h4 class="my-4 font-weight-bold">Experience</h4>
        <p class="black-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam,
          aperiam minima
          assumenda deleniti hic.</p>
      </div>

      <div class="col-md-4 mb-1">
            <i class="fa fa-heart fa-4x orange-text"></i>
            <h4 class="my-4 font-weight-bold">Happiness</h4>
            <p class="black-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam,
              aperiam minima
              assumenda deleniti hic.</p>
          </div>

          <div class="col-md-4 mb-1">
          <i class="fa fa-bicycle fa-4x orange-text"></i>
          <h4 class="my-4 font-weight-bold">Adventure</h4>
          <p class="black-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam,
            aperiam minima
            assumenda deleniti hic.</p>
        </div>
        </div>
        </section>
        </div>
        </main>
      </div>
    );
  }
}

export default Content;
