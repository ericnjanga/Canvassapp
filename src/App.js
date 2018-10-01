import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
 
import { Button, Badge } from 'reactstrap';
import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import VotingBox from './components/VotingBox/VotingBox.js';

import NumberView from './terminals/NumberView.js';

// alert('...resetSteps()');

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
      street: {
        name: 'John Garland Blv',
        numbers: [
          {
            id:'',
            number: 28,
            prosprectInfo: null,
          },
          {
            id:'',
            number: 30,
            prosprectInfo: null,
          },
          {
            id:'',
            number: 32,
            prosprectInfo: null,
          },
          {
            id:'',
            number: 34,
            prosprectInfo: null,
          },
          {
            id:'',
            number: 36,
            prosprectInfo: null,
          },
          {
            id:'',
            number: 40,
            prosprectInfo: null,
          },
          {
            id:'',
            number: 42,
            prosprectInfo: null,
          },
          {
            id:'',
            number: 44,
            prosprectInfo: null,
          },
          {
            id:'',
            number: 50,
            prosprectInfo: null,
          },
        ],
      },
      prospectInfo: {
        streetID: '',
        number: '',       // nouse, appartment, ...
        isSupporter: '',  // Will vote in favor of the candidate
        lawnSign: '',     // Wants the candidate sign on property lawn
      },
    };
    this.saveProspectInfo = this.saveProspectInfo.bind(this);
    this.saveProspectInfo = this.saveProspectInfo.bind(this);
    this.handleDataChange = this.handleDataChange.bind(this);
  }


  componentDidMount() {
    this.resetStepIterator();
  }

  /**
   * Stop steps iterations:
   * - If prospect is not a supporter
   * - 
   */
  stopStep() {
  }



  jumpToStep(stepIndex) {
    console.log('Jump to: ', stepIndex);
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



  handleDataChange(e){
    // console.log();
    const { prospectInfo } = this.state;
    prospectInfo[e.target.name] = e.target.value;
    this.setState({ prospectInfo });
  }


  /**
   * 
   */
  submitProspectInfo() {
    console.log('Submit Prospect info: ', this.state.prospectInfo);
  }


  resetStepIterator() {
    let stepsIterator = moveThroughSteps(this.state.steps);
    this.setState({ stepsIterator });
  }
  

  /**
   * 
   */
  resetProspectInfo() {
    let { prospectInfo } = this.state;
    prospectInfo = {
      number: '',       // nouse, appartment, ...
      isSupporter: '',  // Will vote in favor of the candidate
      lawnSign: '',     // Wants the candidate sign on property lawn
    };
    this.setState({ prospectInfo });
  }


  resetSteps() {
    const { steps } = this.state;
    // steps[0].active = true;
    steps.forEach((element, index) => {
      if(index===0) {
        element.active = true;
      } else {
        element.active = false;
      }
      // console.log('....index', index);
    });
  }


  // saveProspectInfo(propName, value, data) {
  //   if(propName==='number' || propName==='isSupporter' || propName==='lawnSign') {
  //     data[propName] = value;
  //     console.log('...propName=', propName, value);
  //   }
  //   return data;
  // }


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
  saveProspectInfo(propName, value, index) {

    // !step.active && 
    let { steps, prospectInfo } = this.state;
    this.setState({ steps, prospectInfo });

    console.log('....', propName, index,  value);


    if(propName==='number' || propName==='isSupporter' || propName==='lawnSign') {
      prospectInfo[propName] = value;
      // console.log('...propName=', propName, value);
      this.setState({ steps, prospectInfo });

      this.jumpToStep(index + 1);
    }



    // this.state.stepsIterator
    // const { stepsIterator } = this.state;
    // const currStep = stepsIterator.next();
    // // console.log('vote', currStep);
    // if(!currStep.done) {
    //   let { steps, prospectInfo } = this.state;
    //   // Deactivate current step's view (update its value in the steps array)
    //   currStep.value.active = false; // deactivate object
    //   steps.splice(currStep.id, 1, currStep.value); // update current object

    //   // Activate next step's view (if there is any)
    //   let nextInd = currStep.id + 1;
    //   if (steps[nextInd]) {
    //     steps[nextInd].active = true;
    //     //....
    //     prospectInfo = this.saveProspectInfo(propName, value, prospectInfo);
    //     //...
    //     this.setState({ steps, prospectInfo });
    //   } else {
    //     // Submit everything if all steps have been completed
    //     this.submitProspectInfo(); // submit prospect info
    //     // this.resetProspectInfo(); // clean prospect info
    //     // this.resetSteps();
    //     this.resetStepIterator();
    //   }
    // }
  }




  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <h1 className="App-title">Canvassing App</h1>
            <p style={{ margin:0, color:'#ccc' }}>
              <Link to="/">
                <Badge>
                  { this.state.street.name } 
                </Badge>
              </Link>
              {' / '}
              <Badge color="primary">
                ...
              </Badge>
            </p>
          </header>
          <div className="App-intro">

            <Route
              exact
              path="/"
              render={() => <ListOfNumbers list={this.state.street.numbers} /> }
            />

            <Route path={`/:id`} component={NumberView} />

            {/* {
              this.state.steps.map((step, index) => { 
                return(
                  <VotingBox
                    key={index}
                    {...step}
                    {...this.state.prospectInfo}
                    className={`step${index + 1} ${step.active?`active`:``}`}
                    itemIndex={index}
                    handleChange={this.handleDataChange}
                    handleSubmit={this.saveProspectInfo} 
                    onClick={ ()=>this.jumpToStep(index) }
                  />
                )
              })
            } */}
          
            {/* To get started, edit <code>src/App.js</code> and save to reload. */}
          </div>
          {/* <div style={{ position:'absolute', top:'20px', right:'20px' }}>
            <button onClick={this.saveProspectInfo}>New <b>Street / Building</b> Canvassing</button>
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
            <button onClick={this.saveProspectInfo}>Start Recording</button>
          </div> */}


            <p style={{position:'absolute', fontSize:'.8rem', top:'5px', color:'lime'}}><small>Inspiration: Google Calendar App</small></p>
        
        </div>
      </Router>
    );
  }
}




const ListOfNumbers = ({list}) => {
  if(!list) {
    return false;
  }

  return (
    <section className="square-listing">
      {
        list.map(home => {
          return (
            <Link
              key={home.number}
              className="button btn-primary square"
              // color="primary"
              to={`/${home.number}`}
            >{ home.number }</Link>
          )
        })
      }
    </section>
  )
};

export default App;

