import React from 'react';
// Note: removing "Router" creates serious rendering issues
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppBar from './../AppBar.js';
import MenuIcon from '@material-ui/icons/Menu';

import StreetSelector from './../StreetSelector.js';
import ListOfNumbers from './../../components/ListOfNumbers.js';


/**
 * Landing Route:
 * - Declares home route
 * - Renders List of numbers component
 * --------------------------------
 */


const AppLandingRoute = ({ 
  activeNumbersList,
  toggleDrawer,
  activeNumbersList: streetsList,
  activeStreet,
  handleStreetChange: handleChange,
}) => {

  if(!streetsList) {
    return false;
  }
  
  return (
    <Route
      exact
      path="/"
      render={
        () => (
          <div className="view">
            <AppBar
              icon={
                <MenuIcon
                  onClick={toggleDrawer}
                />
              }

              centerContent={
                <StreetSelector
                  defaultStreet={activeStreet.id}
                  handleChange={handleChange}
                />
              }
            />
            <ListOfNumbers
              list={activeNumbersList}
              className="grid-of-numbers"
            />
          </div>
        )
      }
    />
  );
};


export default AppLandingRoute;
