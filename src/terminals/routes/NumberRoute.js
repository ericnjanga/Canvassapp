import React from 'react';
// Note: removing "Router" creates serious rendering issues
import { BrowserRouter as Router, Route } from "react-router-dom";
import NumberView from './../../terminals/Number/NumberView.js';


/**
 * Number Route:
 * - Declares number route
 * - Renders the number view
 * --------------------------------
 */


const AppLandingRoute = ({ data, handleDataChange }) => {

  if(!data) {
    return false;
  }
  
  return (
    <Route
      exact
      path={`/:id`} 
      render={ 
        (props)=>{
          return(
            <div className="view text-center"> 
              <NumberView
                number={props.match.params.id}
                data={ data.get(props.match.params.id) } 
                handleDataChange={handleDataChange}
              />
            </div>
          )
        } 
      }
    />
  );
};


export default AppLandingRoute;
