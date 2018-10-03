import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { streetsList, numberLists } from './settings/setting1.js';

import AppBar from './terminals/AppBar.js';
import AppDrawer from './terminals/AppDrawer.js';

import AppLandingRoute from './terminals/routes/AppLandingRoute.js';
import NumberRoute from './terminals/routes/NumberRoute.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';


/**
 * Street Canvassing Application
 * --------------------------------
 */

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      drawer: {
        active: false,
      },
      prospectInfo: {
        streetID: '',
        number: '',       // home number (house, appartment, condo, ...)
        isSupporter: '',  // Will vote in favor of the candidate
        lawnSign: '',     // Wants the candidate sign on property lawn
      },
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleStreetChange = this.handleStreetChange.bind(this);
  }


  /**
   * Transpert incoming lists into states
   */
  componentDidMount() {
    let activeNumbersList = numberLists.get('-street-0').list;
    this.setState({ numberLists, activeNumbersList, numberLists });
  }

  /**
   * 
   */
  handleStreetChange() {
    console.log('?????')
  }

  
  /**
   * Toggle drawer visibility
   */
  toggleDrawer() {
    const { drawer } = this.state;
    drawer.active = !drawer.active;
    this.setState({ drawer });
  }

  
  /**
   * Transpert incoming lists into states
   */
  handleDataChange(e, id){
    const { activeNumbersList } = this.state;
    const item = activeNumbersList.get(id);

    item.prospectInfo[e.target.name] = e.target.value;
    activeNumbersList.get(id, item);
    this.setState({ activeNumbersList });
  }


  render() {
    return ( 
      <Router>
        <div className="App">
          <AppBar
            streetsList={streetsList}
            toggleDrawer={this.toggleDrawer}
            handleStreetChange={this.handleStreetChange}
          />

          <AppDrawer
            {...this.state.drawer}
            toggleDrawer={this.toggleDrawer}
            dataList={this.state.activeNumbersList}
          />

          <AppLandingRoute
            data={this.state.activeNumbersList}
          />

          <NumberRoute
            data={this.state.activeNumbersList}
            handleDataChange={this.handleDataChange}
          />

        </div>
      </Router>
    );
  }
}


export default App;
