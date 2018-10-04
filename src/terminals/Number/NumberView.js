import React from 'react';
// import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { BrowserRouter as Route, Redirect } from "react-router-dom";

import AbsentIcon from '@material-ui/icons/CallMissedOutgoing';
import SupporterIcon from '@material-ui/icons/SentimentVerySatisfied';
import UndecidedIcon from '@material-ui/icons/Help';
import NonSupporterIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import PosterSignIcon from '@material-ui/icons/PictureInPicture';

import NumberStatus from './NumberStatus.js';
import NumberComment from './NumberComment.js';


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
      info: {},
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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  /**
   * Update state with number info when the component loads
   */
  componentDidMount() {


  alert('preview number view on mobile and improve steps transition and data entering')

    this.setState({ 
      number: this.props.number,
      info: this.props.data.prospectInfo
    });
  }


  /**
   * Saves info to step as soon as the input changes
   * @param {*} event 
   */
  handleChange(event) {
    const { info } = this.state;
    info[event.target.name] = event.target.value;
    this.setState({ info });
  }


  /**
   * Jumps from one step to another
   * @param {*} stepIndex 
   */
  jumpToStep(stepIndex) {
    const { steps } = this.state;
    const step = steps[stepIndex];
    if (!step.active) {
      steps.forEach((item, index) => {
        if(index!==stepIndex) {
          item.active = false;
        } else {
          item.active = true;
        }
      });
    }
    this.setState({ steps })
  }


  /**
   * Redirects to main view
   */
  handleSubmit() {
    this.setState({ redirectHome:true });
  }


  render() {

    if(this.state.redirectHome) {
      return <Redirect to='/' />;
    }

    return (
      <Route>
        <React.Fragment>
          {
            this.state.steps.map((step, index) => {
              return (
                <div
                  key={step.name}
                  onClick={ ()=>this.jumpToStep(index) }
                  className={`stepPanel stepPanel-${index + 1} ${step.active?`active`:``}`}
                >
                  { step.render() }
                </div>
              )
            })
          }
          
          <footer className="view--footer">
            <Button
              color="danger"
              className="text-uppercase font-weight-bold"
              onClick={this.handleSubmit}
            >Done</Button>
          </footer>
        </React.Fragment>
      </Route>
    );
  }

}

export default NumberView;