import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeContext } from './settings/init.js';
import { streetsList, numberLists } from './settings/setting1.js';
import { colorCodesList } from './settings/settings2.js';

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

    const activeStreet = streetsList[0]; //active street (by default)
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
   * Change theme's color code
   * - Generate a new random color each time called (different from the last one)
   */
  generareNewColorCode() {
    
    const { theme } = this.state;
    theme.colorCode = getRandomItem(colorCodesList, theme.colorCode);
    this.setState({ theme });

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
            
            <AppDrawer
              {...this.state.drawer}
              activeStreet={this.state.activeStreet}
              toggleDrawer={this.toggleDrawer}
              dataList={this.state.activeNumbersList}
            />

            {/* <Switch> */}
              <AppLandingRoute
                {...this.state}
                toggleDrawer={this.toggleDrawer}
                handleStreetChange={this.handleStreetChange}
              />

              <NumberRoute
                {...this.state}
                handleDataChange={this.handleDataChange}
              />
            {/* </Switch> */}
          </div>
        </Router>
      </ThemeContext.Provider>
    );
  }
}


export default App;
