import React from 'react';
// Note: removing "Router" creates serious rendering issues
import { BrowserRouter as Router, Route } from "react-router-dom";
import ListOfNumbers from './../../components/ListOfNumbers.js';


/**
 * Landing Route:
 * - Declares home route
 * - Renders List of numbers component
 * --------------------------------
 */


const AppLandingRoute = ({ data }) => {

  if(!data) {
    return false;
  }
  
  return (
    <Route
      exact
      path="/"
      render={
        () => (
          <div className="view">
            <ListOfNumbers list={data} />
          </div>
        )
      }
    />
  );
};


export default AppLandingRoute;
