import React, { Component } from "react";
import { Link } from 'react-router';
import Navbar from "../components/Navbar/Navbar";
import { Container, Row, Col, Input, Button } from "mdbreact";
import Footer from "../components/Footer/Footer";

class Register extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <main>
          <div class="container mt-5 pt-5 ">
            <section class=" section-image my-5">
              <div class="modal-dialog cascading-modal" role="document">
                <div class="modal-content">
                  <div class="modal-header amber darken-3 white-text">
                    <h4 class="title">
                      <i class="fa fa-unlock-alt" aria-hidden="true" /> Register
                    </h4>
                    <button
                      type="button"
                      class="close waves-effect waves-light"
                      data-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div class="modal-body mb-0">
                    <form
                      action=""
                      method=" "
                      id="formValidate"
                      novalidate="novalidate"
                      class="needs-validation"
                    >
                      <div class="md-form form-sm">
                        <i class="fa fa-user prefix" />
                        <input
                          type="text"
                          name="name"
                          id="contact-name"
                          class="form-control"
                          required
                        />

                        <label for="contact-name" class="">
                          Your name
                        </label>
                        <div class="valid-feedback">Checked!</div>
                        <div class="invalid-feedback">
                          Please provide a valid name!
                        </div>
                      </div>

                      <div class="md-form form-sm">
                        <i class="fa fa-envelope prefix" />
                        <input
                          type="email"
                          name="email"
                          id="contact-email"
                          class="form-control"
                          required=""
                        />
                        <label for="contact-email" class="">
                          Your email
                        </label>
                        <div class="valid-feedback">Looks good!</div>
                        <div class="invalid-feedback">
                          Please provide a valid email!
                        </div>
                      </div>

                      <div class="md-form form-sm">
                        <i class="fa fa-lock prefix" />
                        <input
                          type="text"
                          id="contact-subject"
                          name="subject"
                          class="form-control"
                          required=""
                        />
                        <label for="contact-subject" class="">
                          Password
                        </label>
                        <div class="valid-feedback">Checked!</div>
                        <div class="invalid-feedback">
                         Invalid Password!
                        </div>
                      </div>

                      <div class="md-form form-sm">
                        <i class="fa fa-exclamation-triangle prefix" />
                        <input
                          type="text"
                          id="contact-subject"
                          name="subject"
                          class="form-control"
                          required=""
                        />
                        <label for="contact-subject" class="">
                         Confirm  Password
                        </label>
                        <div class="valid-feedback">Checked!</div>
                        <div class="invalid-feedback">
                        passwords don,t match!
                        </div>
                      </div>

                      <div class="text-center mt-1-half">
                        <button
                          class="btn btn-amber mb-2 waves-effect waves-light"
                          id="contact-send"
                          name="submitted"
                          type="submit"
                        >
                          Login
                        </button>
                        <p className="font-small grey-text mt-3">
                          Already have an account?{" "}
                          <a
                            href="#"
                            className="dark-grey-text ml-1 font-weight-bold"
                          >
                            {" "}
                            Sign in
                          </a>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Register;
