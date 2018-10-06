import React from 'react';
// Note: removing "Router" creates serious rendering issues
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import AppBar from './../AppBar.js';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import NumberView from './../../terminals/Number/NumberView/NumberView.js';


/**
 * Number Route:
 * - Declares number route
 * - Renders the number view
 * --------------------------------
 */


class NumberRoute extends React.Component {

  state = {
    redirectHome: false,
  };

  /**
   * Redirect to home page
   * (returnredirectHome state value to false so that users can re-inter the view) 
   */
  handleRedirect = () => {
    
    this.setState({ redirectHome:true });
    setTimeout(
      () => {
        this.setState({ redirectHome:false });
      },
      400
    );

  }


  render() {

    const { activeStreet, handleDataChange, activeNumbersList } = this.props;
    const { redirectHome } = this.state;

    console.log('...activeNumbersList=', activeNumbersList)

    if(!activeNumbersList) {
      return false;
    }
    
    return (
      <Route
        // exact
        path={`/:id`} 
        render={ 
          (props)=>{

            const residenceNumber = props.match.params.id;

            return(
              <div className="view text-center">
                {
                  redirectHome &&
                  <Redirect to='/' />
                }
                <AppBar
                  icon={
                    <ArrowBackIcon
                      onClick={this.handleRedirect}
                    />
                  }

                  centerContent={
                    <div className="text-left">
                      { activeStreet.name } / <b>{ residenceNumber }</b>
                    </div>
                  }
                  // streetsList={streetsList}
                  // activeStreet={this.state.activeStreet}
                  // toggleDrawer={this.toggleDrawer}
                  // handleStreetChange={this.handleStreetChange}
                />

                {
                  console.log('-----activeNumbersList=', activeNumbersList)
                }
                <NumberView
                  number={residenceNumber}
                  data={ activeNumbersList.get(residenceNumber) } 
                  handleDataChange={handleDataChange}
                  activeStreet={this.props.activeStreet}
                />
              </div>
            )
          } 
        }
      />
    );


  } // [end] render
};


export default NumberRoute;
