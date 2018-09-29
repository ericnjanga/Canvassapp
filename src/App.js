import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import VotingBox from './components/VotingBox/VotingBox.js';

/**
 * Custom iterator:
 * - next() returns: { id:currentIndex, value:currentValue, done:false }
 * @param {*} arr 
 */
function moveThroughSteps(arr) {
  let nextIndex = 0;
  return {
    next() {
      if(nextIndex < arr.length) {
        console.log('...arr.length', arr.length, '...nextIndex', nextIndex);
        let val = { id:nextIndex, value:arr[nextIndex], done:false };
        nextIndex += 1;
        return val;
      } else {
        return { done:true }
      }
    }
  };
}

/**
 * Political Canvassing
 */

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      steps: [
        // { name:'start' },
        { title:'Enter xxx number', name:'number', type:'textInput', isRecord:true, active:true },
        { title:'Is this a supporter?', name:'isSupporter', type:'bool', isRecord:true },
        { title:'wants a lawn sign?', name:'lawnSign', type:'bool', isRecord:true },
      ],
      prospect: {
        number: null,       // nouse, appartment, ...
        isSupporter: null,  // Will vote in favor of the candidate
        lawnSign: null,     // Wants the candidate sign on property lawn
      },
    };
    this.moveToNextStep = this.moveToNextStep.bind(this);
    this.saveProspectInfo = this.saveProspectInfo.bind(this);
  }


  componentDidMount() {
    let stepsIterator = moveThroughSteps(this.state.steps);
    this.setState({ stepsIterator });
  }

  /**
   * Stop steps iterations:
   * - If prospect is not a supporter
   * - 
   */
  stopStep() {

  }


  /**
   * 
   */
  submitProspectInfo() {
    console.log('Submit Prospect info: ', this.state.prospect);
  }
  

  /**
   * 
   */
  clearProspectInfo() {
    let { prospect } = this.state;
    prospect = {
      number: null,       // nouse, appartment, ...
      isSupporter: null,  // Will vote in favor of the candidate
      lawnSign: null,     // Wants the candidate sign on property lawn
    };
    this.setState({ prospect });
  }


  saveProspectInfo(propName, value, data) {
    if(propName==='number' || propName==='isSupporter' || propName==='lawnSign') {
      data[propName] = value;
      console.log('...propName=', propName, value);
    }
    return data;
  }


  /**
   * If iteration is not completed:
   * - Deactivate current step's view
   * -
   * If iteration is completed;
   * - submit data
   * - clean prospect info
   * @param {*} propName 
   * @param {*} value 
   */
  moveToNextStep(propName, value) {
    // this.state.stepsIterator
    const { stepsIterator } = this.state;
    const currStep = stepsIterator.next();
    // console.log('vote', currStep);
    if(!currStep.done) {
      let { steps, prospect } = this.state;
      // Deactivate current step's view (update its value in the steps array)
      currStep.value.active = false; // deactivate object
      steps.splice(currStep.id, 1, currStep.value); // update current object

      // Activate next step's view (if there is any)
      let nextInd = currStep.id + 1;
      if (steps[nextInd]) {
        steps[nextInd].active = true;
      } else {
        // Submit everything if all steps have been completed
        this.submitProspectInfo(); // submit prospect info
        this.clearProspectInfo(); // clean prospect info
      }

      //....
      prospect = this.saveProspectInfo(propName, value, prospect);

      //...
      this.setState({ steps, prospect });
    }
  }




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          {/* <VotingBox
            title='Start a new street'
            active='active'
          /> */}
          {
            this.state.steps.map(step => {
              if (!step.isRecord){
                return false;
              }
              return(
                <VotingBox
                  key={step.name}
                  {...step}
                  className={`${step.active?`active`:``}`}
                  // record={this.saveProspectInfo}
                  handleSubmit={this.moveToNextStep} 
                />
              )
            })
          }
        
          {/* To get started, edit <code>src/App.js</code> and save to reload. */}
        </div>
        <div style={{ position:'absolute', top:'20px', right:'20px' }}>
          <button onClick={this.moveToNextStep}>New <b>Street / Building</b> Canvassing</button>
          <div>
            <label>Street / Building name</label>
            <input type="text" placeholder="Street / Building name" />
          </div>
          <div>
            <label>Select an existing one:</label>
            <select>
              <option>Recorded Street 1</option>
              <option>Recorded Street 2</option>
              <option>Recorded Street 3</option>
              <option>Recorded Street 4</option>
            </select>
          </div>
        </div>
        <div style={{ position:'absolute', top:'90px', right:'20px' }}>
          <button onClick={this.moveToNextStep}>Start Recording</button>
        </div>
      </div>
    );
  }
}

export default App;
