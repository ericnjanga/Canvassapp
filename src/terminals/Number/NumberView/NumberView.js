import React from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter as Route, Redirect } from "react-router-dom";

import AbsentIcon from '@material-ui/icons/CallMissedOutgoing';
import SupporterIcon from '@material-ui/icons/SentimentVerySatisfied';
import UndecidedIcon from '@material-ui/icons/Help';
import NonSupporterIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import PosterSignIcon from '@material-ui/icons/PictureInPicture';

import NumberStatus from './../NumberStatus.js';
import NumberComment from './../NumberComment.js';
import NumberViewPresentation from './NumberViewPresentation.js';

import NumberView404 from './NumberView404.js';
import { Button } from '@material-ui/core';


/**
 * Number View:
 * - Renders view details for capturing data:
 * -- status (yes, no, undecided ...)
 * -- signs
 * -- comments
 * (Component representing a house, townhouse or appartment number)
 * (Data is selected and passed up to parent component)
 * --------------------------------
 */


class NumberView extends React.Component { 

  constructor(props) {
    super(props);
    this.state = {
      redirectHome: false,
      info: null,
      statusList: [
        {
          text: 'absent',
          icon: ()=><AbsentIcon />
        },
        {
          text: 'yes',
          icon: ()=><SupporterIcon />
        },
        {
          text: 'undecided',
          icon: ()=><UndecidedIcon />
        },
        {
          text: 'no',
          icon: ()=><NonSupporterIcon />
        },
      ],
      signList: [
        {
          text: 'small',
          icon: ()=><PosterSignIcon />
        },
        {
          text: 'big',
          icon: ()=><PosterSignIcon style={{ fontSize:'50px'}} />
        },
      ],
      steps: [
        { 
          title:'Status',
          name:'status',
          render:()=>(
            <NumberStatus
              title='Status'
              statusValue={this.state.info.status}
              signValue={this.state.info.sign}
              handleDataChange={(e)=>this.props.handleDataChange(e, this.state.number)}
              optionList={this.state.statusList}
              signList={this.state.signList}
            />
          ),
          active:true,
        },
        { 
          title:'Comment?',
          name:'comment',
          render: ()=>(
            <NumberComment  
              handleChange={(e)=>this.props.handleDataChange(e, this.state.number )} //handleChange}
              title='Comment'
              value={this.state.info.comment}
            />
          ), 
        },
      ],
    };
    
  }


  /**
   * Update state with number info when the component loads
   */
  componentDidMount() {

    const { number, data } = this.props;

    if(data) {
      this.setState({ 
        number: number,
        info: data.prospectInfo
      });
    }

  }


  /**
   * Saves info to step as soon as the input changes
   * @param {*} event 
   */
  handleChange = (event) => {
    const { info } = this.state;
    info[event.target.name] = event.target.value;
    this.setState({ info });
  }


  /**
   * Redirects to main view
   */
  handleSubmit = () => {
    this.setState({ redirectHome:true });
  }


  render() {

    const { redirectHome, info } = this.state;

    if(redirectHome) {
      return <Redirect to='/' />;
    }

    return (
      <Route>
        <React.Fragment>
          {
            info 
            ?
            <NumberViewPresentation
              {...this.state}
            />
            :
            <NumberView404
              {...this.props}
              {...this.state}
              handleReturnHome={this.handleSubmit}
            />
          }

          <div style={{ marginTop:'30px'}}>
            <Button
              style={{ width: '100%'}}
              variant="contained"
              color="secondary"
              className="text-uppercase font-weight-bold"
              onClick={this.handleSubmit}
            >
              Return home
            </Button>
          </div>
        </React.Fragment>
      </Route>
    );
  }

}

export default NumberView;

