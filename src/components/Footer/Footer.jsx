import React, { Component } from "react";

import "./Footer.css";
import "./bootstrap.css";
import "./mdb.min.css";
import "./font-awesome.min.css";
class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small   indigo darken-4 pt-4 mt-sm-0">
        <div className="footer-copyright  mb-0 py-3 text-center">

            <p>© {new Date().getFullYear()} Idea Awesome Movies &amp; TV Shows. All Rights Reserved</p>

            </div>

        

       
      </footer>
    );
  }
}

export default Footer;
