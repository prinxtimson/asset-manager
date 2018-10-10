import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
class Features extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <main>
          <div className="container mt-5 pt-5 ">
            <div className="row mt-5">
          
              <div className="col-md-7 mb-4 view  zoom">
              <div className="veiw overlay hm-white-light z-depth-1-half ">
                <img
                  src={require("../img/images/minions.jpg")}
                  alt="minions"
                  className="img-fluid"
                />
                <div className="mask" />
              </div>
           

              </div>
              <div className="col-md-12 col-lg-4 mt-3 mb-3">
                <h1>Awesome movies at your feets</h1>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
                  omnis saepe ex delectus est dolorum, voluptatem earum ipsum
                  laudantium consectetur distinctio temporibus corporis illum
                  aspernatur. Ut eveniet autem esse aperiam?
                </p>
                <a href="forms.html" className="btn btn- indigo darken-4">
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </main>

        <div className="container">
          <section id="top_movies">
            <div className="wrapper">
              <header className="clearfix">
                <h2 className="popular_movies">Latest Added Movies</h2>
              </header>
              <div className="row">
                <div className="col-xs-6 col-sm-4 col-md-2 col-lg-2  view  zoom">
                  <img src={require("../img/images/movie2.jpg")} alt="movie2" />

                  <h3 className="title">Spider Man2</h3>
                  <a className="btn btn-primary">download</a>
                  <p className="post_info">PG13 | 100 minutes</p>
                </div>

                <div className="col-xs-6 col-sm-4 col-md-2 col-lg-2  view  zoom">
                  <img src={require("../img/images/movie3.jpg")} alt="movie3" />

                  <h3 className="title">Spider Man3</h3>
                  <a className="btn btn-primary">download</a>
                  <p className="post_info">PG13 | 100 minutes</p>
                </div>

                <div className="col-xs-6 col-sm-4 col-md-2 col-lg-2  view  zoom">
                  <img src={require("../img/images/movie4.jpg")} alt="movie4" />

                  <h3 className="title">Walkyrie</h3>
                  <a className="btn btn-primary">download</a>
                  <p className="post_info">PG13 | 100 minutes</p>
                </div>

                <div className="col-xs-6 col-sm-4 col-md-2 col-lg-2  view  zoom">
                  <img src={require("../img/images/movie5.jpg")} alt="movie5" />

                  <h3 className="title">Gladiator</h3>
                  <a className="btn btn-primary">download</a>
                  <p className="post_info">PG13 | 100 minutes</p>
                </div>

                <div className="col-xs-6 col-sm-4 col-md-2 col-lg-2  view  zoom">
                  <img src={require("../img/images/movie6.jpg")} alt="movie6" />

                  <h3 className="title">Ice Age</h3>
                  <a className="btn btn-primary">download</a>
                  <p className="post_info">PG13 | 100 minutes</p>
                </div>

                <div className="col-xs-6 col-sm-4 col-md-2 col-lg-2  view  zoom">
                  <img src={require("../img/images/movie7.jpg")} alt="movie7" />

                  <h3 className="title">Transformer</h3>
                  <a className="btn btn-primary">download</a>
                  <p className="post_info">PG13 | 100 minutes</p>
                </div>
              </div>
            </div>
          </section>

          <section id="top_movies">
            <div className="wrapper">
              <header className="clearfix">
                <h2 className="popular_movies">Popular Movies</h2>
              </header>
              <div className="row">
                <div className="col-xs-6 col-sm-4 col-md-2 col-lg-2  view  zoom">
                  <img src={require("../img/images/movie7.jpg")} alt="movie7" />

                  <h3 className="title">Transforme</h3>
                  <a className="btn btn-primary">download</a>
                  <p className="post_info">PG13 | 100 minutes</p>
                </div>

                <div class="col-xs-6 col-sm-4 col-md-2 col-lg-2  view  zoom">
                  <img src={require("../img/images/movie8.jpg")} alt="movie8" />

                  <h3 class="title">Magnet </h3>
                  <a class="btn btn-primary">download</a>
                  <p class="post_info">PG13 | 100 minutes</p>
                </div>

                <div class="col-xs-6 col-sm-4 col-md-2 col-lg-2  view  zoom">
                  <img src={require("../img/images/movie9.jpg")} alt="movie9" />

                  <h3 class="title">Kung</h3>
                  <a class="btn btn-primary">download</a>
                  <p class="post_info">PG13 | 100 minutes</p>
                </div>

                <div class="col-xs-6 col-sm-4 col-md-2 col-lg-2  view  zoom">
                  <img
                    src={require("../img/images/movie10.jpg")}
                    alt="movie5"
                  />

                  <h3 class="title">Eagle </h3>
                  <a class="btn btn-primary">download</a>
                  <p class="post_info">PG13 | 100 minutes</p>
                </div>

                <div class="col-xs-6 col-sm-4 col-md-2 col-lg-2  view  zoom">
                  <img
                    src={require("../img/images/movie11.jpg")}
                    alt="movie6"
                  />

                  <h3 class="title">Narda</h3>
                  <a class="btn btn-primary">download</a>
                  <p class="post_info">PG13 | 100 minutes</p>
                </div>

                <div class="col-xs-6 col-sm-4 col-md-2 col-lg-2  view  zoom">
                  <img
                    src={require("../img/images/movie12.jpg")}
                    alt="movie12"
                  />

                  <h3 class="title">Angels </h3>
                  <a class="btn btn-primary">download</a>
                  <p class="post_info">PG13 | 100 minutes</p>
                </div>
              </div>

              <div class="row">
                <div class="col-xs-6 col-sm-4 col-md-2 col-lg-2  view  zoom">
                  <img
                    src={require("../img/images/movie13.jpg")}
                    alt="movie13"
                  />

                  <h3 class="title">House</h3>
                  <a class="btn btn-primary">download</a>
                  <p class="post_info">PG13 | 100 minutes</p>
                </div>

                <div class="col-xs-6 col-sm-4 col-md-2 col-lg-2  view  zoom">
                  <img
                    src={require("../img/images/movie14.jpg")}
                    alt="movie8"
                  />

                  <h3 class="title">Vacancy </h3>
                  <a class="btn btn-primary">download</a>
                  <p class="post_info">PG13 | 100 minutes</p>
                </div>

                <div class="col-xs-6 col-sm-4 col-md-2 col-lg-2  view  zoom">
                  <img
                    src={require("../img/images/movie15.jpg")}
                    alt="movie9"
                  />

                  <h3 class="title">Mirrors</h3>
                  <a class="btn btn-primary">download</a>
                  <p class="post_info">PG13 | 100 minutes</p>
                </div>

                <div class="col-xs-6 col-sm-4 col-md-2 col-lg-2  view  zoom">
                  <img
                    src={require("../img/images/movie16.jpg")}
                    alt="movie5"
                  />

                  <h3 class="title">Eagle</h3>
                  <a class="btn btn-primary">download</a>
                  <p class="post_info">PG13 | 100 minutes</p>
                </div>

                <div class="col-xs-6 col-sm-4 col-md-2 col-lg-2  view  zoom">
                  <img
                    src={require("../img/images/movie17.jpg")}
                    alt="movie6"
                  />

                  <h3 class="title">Narda</h3>
                  <a class="btn btn-primary">download</a>
                  <p class="post_info">PG13 | 100 minutes</p>
                </div>

                <div class="col-xs-6 col-sm-4 col-md-2 col-lg-2  view  zoom">
                  <img
                    src={require("../img/images/movie18.jpg")}
                    alt="movie12"
                  />

                  <h3 class="title">Angels </h3>
                  <a class="btn btn-primary">download</a>
                  <p class="post_info">PG13 | 100 minutes</p>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-6 col-sm-4 col-md-2 col-lg-2  view  zoom">
                  <img
                    src={require("../img/images/movie13.jpg")}
                    alt="movie13"
                  />

                  <h3 class="title">House</h3>
                  <a class="btn btn-primary">download</a>
                  <p class="post_info">PG13 | 100 minutes</p>
                </div>

                <div class="col-xs-6 col-sm-4 col-md-2 col-lg-2  view  zoom">
                  <img
                    src={require("../img/images/movie14.jpg")}
                    alt="movie8"
                  />

                  <h3 class="title">Vacancy </h3>
                  <a class="btn btn-primary">download</a>
                  <p class="post_info">PG13 | 100 minutes</p>
                </div>

                <div class="col-xs-6 col-sm-4 col-md-2 col-lg-2  view  zoom">
                  <img
                    src={require("../img/images/movie15.jpg")}
                    alt="movie9"
                  />

                  <h3 class="title">Mirrors</h3>
                  <a class="btn btn-primary">download</a>
                  <p class="post_info">PG13 | 100 minutes</p>
                </div>

                <div class="col-xs-6 col-sm-4 col-md-2 col-lg-2  view  zoom">
                  <img
                    src={require("../img/images/movie16.jpg")}
                    alt="movie5"
                  />

                  <h3 class="title">Eagle</h3>
                  <a class="btn btn-primary">download</a>
                  <p class="post_info">PG13 | 100 minutes</p>
                </div>

                <div class="col-xs-6 col-sm-4 col-md-2 col-lg-2  view  zoom">
                  <img
                    src={require("../img/images/movie17.jpg")}
                    alt="movie6"
                  />

                  <h3 class="title">Narda</h3>
                  <a class="btn btn-primary">download</a>
                  <p class="post_info">PG13 | 100 minutes</p>
                </div>

                <div class="col-xs-6 col-sm-4 col-md-2 col-lg-2  view  zoom">
                  <img
                    src={require("../img/images/movie18.jpg")}
                    alt="movie12"
                  />

                  <h3 class="title">Angels </h3>
                  <a class="btn btn-primary">download</a>
                  <p class="post_info">PG13 | 100 minutes</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Features;
