import './App.css';
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About'

export default class App extends Component {
  static defaultProps={
    country: "in",
    pageSize: 6,
    category: "general"

  }
  static propTypes ={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/"><News  key="general" pageSize={5} country="in" category="general"/></Route>
          <Route exact path="/entertainment"><News key="entertainment" pageSize={5} country="in" category="entertainment"/></Route>
          <Route exact path="/business"><News key="business" pageSize={5} country="in" category="business"/></Route>
          <Route exact path="/health"><News key="health" pageSize={5} country="in" category="health"/></Route>
          <Route exact path="/science"><News key="science" pageSize={5} country="in" category="science"/></Route>
          <Route exact path="/sports"><News key="sports"  key=""pageSize={5} country="in" category="sports"/></Route>
          <Route exact path="/technology"><News key="technology" pageSize={5} country="in" category="technology"/></Route>
          <Route exact path="/about"><About/></Route>
        </Switch>
        
       
       </Router>
      </div>
    )
  }
}

