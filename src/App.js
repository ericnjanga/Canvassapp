import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeContext } from './settings/init.js';
import { streetsList, numberLists } from './settings/setting1.js';
import { colorCodesList } from './settings/settings2.js';

import AppBar from './terminals/AppBar.js';
import AppDrawer from './terminals/AppDrawer.js';

import AppLandingRoute from './terminals/routes/AppLandingRoute.js';
import NumberRoute from './terminals/routes/NumberRoute.js';

import { getRandomItem } from './utilities/utils1.js';

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
      theme: {
        colorCode: '',
      },
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }


  /**
   * Transpert incoming lists into states
   * - Get active street
   * - Active street numbers (from active street)
   * - Save in the state
   */
  componentDidMount() {
    // Generate a new color code to be used in the "numbers grid"
    this.generareNewColorCode();

    const activeStreet = streetsList[1]; //active street (by default)
    let activeNumbersList = numberLists.get(activeStreet.id).list;
    this.setState({ activeNumbersList, numberLists, activeStreet });
  }

  /**
   * Each time a street is changed (from the dropdown): 
   * - Update the "active numbers list" with the new list of numbers
   * - Modify the "grid of numbers" color theme
   */
  handleStreetChange = (event) => {
    const activeStreet = streetsList.filter(streetItem => {
      return streetItem.id===event.target.value
    })[0];
    let activeNumbersList = numberLists.get(activeStreet.id).list;
    this.setState({ activeNumbersList, activeStreet });
    
    // Generate a new color code to be used in the "numbers grid"
    this.generareNewColorCode();
  }

  
  /**
   * Change the color of squ
   */
  generareNewColorCode() {
    // theme.colorCode
    const { theme } = this.state;

    // Render a different color of button each time
    // let btnColor = localStorage.getItem(`${appInfo.id}-grid-btn-color`);
    theme.colorCode = getRandomItem(colorCodesList, theme.colorCode);
    this.setState({ theme })
    console.log('colorCode=', theme.colorCode);


    
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
   * Register all input changes (buttons, textarea)
   * happening in <NumberView /> with this state
   */
  handleDataChange = (e, id) => {
    const { activeNumbersList } = this.state;
    const item = activeNumbersList.get(id);

    item.prospectInfo[e.target.name] = e.target.value;
    activeNumbersList.set(id, item);
    this.setState({ activeNumbersList });
  }


  render() {
    return ( 
      <ThemeContext.Provider value={this.state.theme}>
        <Router>
          <div className="App">
            <AppBar
              streetsList={streetsList}
              activeStreet={this.state.activeStreet}
              toggleDrawer={this.toggleDrawer}
              handleStreetChange={this.handleStreetChange}
            />

            <AppDrawer
              {...this.state.drawer}
              activeStreet={this.state.activeStreet}
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
      </ThemeContext.Provider>
    );
  }
}


export default App;
