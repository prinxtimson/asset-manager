import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';

import Home from './pages/Home.jsx';
import Features  from './pages/Features.jsx';
import Login  from './pages/Login.jsx';
import ContactUs  from './pages/ContactUs.jsx';
import Register  from './pages/Register.jsx';


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path="/" component={ Home } />
        <Route exact path="/Features" component={ Features } />
        <Route exact path="/ContactUs" component={ ContactUs } />
        <Route exact path="/Login" component={ Login} />
        <Route exact path="/Register" component={ Register} />
        </div>
        </Router>
    );
  }
}

export default App;
