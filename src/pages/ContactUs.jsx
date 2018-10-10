import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
class ContactUs extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <div class="container mt-5 pt-5 ">
          <section class=" section-image my-5">
            <div class="text-center mt-3 pt 3 ">
              <h2 class="h1-responsive font-weight-bold text-center my-5">
                Contact us
              </h2>
              <h2 class="text-center w-responsive mx-auto mb-3">
                Welcome to our contact page.
              </h2>
              <p class="text-center w-responsive mx-auto mb-3">
                click on the link below For More Details And Enquiries and
                submit your request you will get your feed back within 24hrs.
              </p>
            </div>
            <div
              class="modal fade"
              id="modalContactForm"
              tabindex="-1"
              role="dialog"
              aria-labelledby="myModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog cascading-modal" role="document">
                <div class="modal-content">
                  <div class="modal-header amber darken-3 white-text">
                    <h4 class="title">
                      <i class="fa fa-pencil" /> Contact form
                    </h4>
                    <button
                      type="button"
                      class="close waves-effect waves-light"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
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
                        <i class="fa fa-tag prefix" />
                        <input
                          type="text"
                          id="contact-subject"
                          name="subject"
                          class="form-control"
                          required=""
                        />
                        <label for="contact-subject" class="">
                          Subject
                        </label>
                        <div class="valid-feedback">Checked!</div>
                        <div class="invalid-feedback">
                          Please provide a valid subject!
                        </div>
                      </div>

                      <div class="md-form form-sm">
                        <i class="fa fa-pencil prefix" />
                        <textarea
                          type="text"
                          id="contact-message"
                          name="message"
                          class="md-textarea mb-0 form-control"
                          required=""
                        />
                        <label for="contact-message">Your message</label>
                        <div class="valid-feedback">Correct!</div>
                        <div class="invalid-feedback">
                          Please input your message!
                        </div>
                      </div>

                      <div class="text-center mt-1-half">
                        <button
                          class="btn btn-amber mb-2 waves-effect waves-light"
                          id="contact-send"
                          name="submitted"
                          type="submit"
                        >
                          Send
                          <i class="fa fa-send ml-1" />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div class="text-center">
              <a
                href=""
                class="btn btn-amber btn-rounded my-3 waves-effect waves-light"
                data-toggle="modal"
                data-target="#modalContactForm"
              >
                Contact Us
              </a>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ContactUs;
