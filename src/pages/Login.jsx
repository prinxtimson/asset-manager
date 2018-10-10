import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Container, Row, Col, Input, Button } from 'mdbreact';
import Footer from "../components/Footer/Footer";
class Login extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <main>
        <container>
        <Row>
        <Col md="6">
        <form className="mt-4 pt-5"> 
    <p className="h4 text-center mt-4">Sign in</p>
    <label htmlFor="defaultFormLoginEmailEx" className="grey-text">Your email</label>
    <input type="email" id="defaultFormLoginEmailEx" className="form-control"/>
    <br/>
    <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">Your password</label>
    <input type="password" id="defaultFormLoginPasswordEx" className="form-control"/>
    <div className="text-center mt-4">
    <button className="btn btn-indigo" type="submit">Login</button>
    </div>
</form>
        </Col>
        </Row>
        </container>
       </main>
         <Footer />
      </div>
    );
  }
}

export default Login;
