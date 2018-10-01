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
      streetsList: [
        {
          id: '-street-0',
          name: 'John Garland Blv',
        },
        {
          id: '-street-1',
          name: 'John Garland Blv',
        },
        {
          id: '-street-2',
          name: 'John Garland Blv',
        },
      ],
      numbers: new Map(
        [
          [
            '-street-0',
            {
              list: new Map(
                [
                  [
                    '28F',
                    {
                      id:'28F',
                      prospectInfo: {
                        comment:'..28F comment here...',
                      },
                    }
                  ],
                  [
                    '30S',
                    {
                      id:'30S',
                      prospectInfo: {
                        comment:'..Hey...',
                      },
                    }
                  ],
                  [
                    '32',
                    {
                      id:'32',
                      prospectInfo: {
                        comment:'..Hey...',
                      },
                    }
                  ],
                  [
                    '34U',
                    {
                      id:'34U',
                      prospectInfo: {
                        comment:'..Hey...',
                      },
                    }
                  ],
                  [
                    '30S',
                    {
                      id:'30S',
                      prospectInfo: {
                        comment:'..Hey...',
                      },
                    }
                  ],
                  [
                    '36',
                    {
                      id:'36',
                      prospectInfo: {
                        comment:'..Hey...',
                      },
                    }
                  ],
                  [
                    '38A',
                    {
                      id:'38A',
                      prospectInfo: {
                        comment:'..Hey...',
                      },
                    }
                  ],
                  [
                    '42',
                    {
                      id:'42',
                      prospectInfo: {
                        comment:'..Hey...',
                      },
                    }
                  ],
                  [
                    '44F',
                    {
                      id:'44F',
                      prospectInfo: {
                        comment:'..Hey...',
                      },
                    }
                  ],
                  [
                    '46',
                    {
                      id:'46',
                      prospectInfo: {
                        comment:'..Hey...',
                      },
                    }
                  ],
                  [
                    '50U',
                    {
                      id:'50U',
                      prospectInfo: {
                        comment:'..Hey...',
                      },
                    }
                  ],
                ]
              ), //list
            },
          ], // numbers 0

          [
            '-street-1',
            {
              list: new Map(
                [
                  [
                    '28F',
                    {
                      id:'',
                      prospectInfo: {
                        comment:'..Hey...',
                      },
                    }
                  ],
                  [
                    '30S',
                    {
                      id:'',
                      prospectInfo: {
                        comment:'..Hey...',
                      },
                    }
                  ],
                  [
                    '32',
                    {
                      id:'',
                      prospectInfo: {
                        comment:'..Hey...',
                      },
                    }
                  ],
                  [
                    '28F',
                    {
                      id:'',
                      prospectInfo: {
                        comment:'..Hey...',
                      },
                    }
                  ],
                  [
                    '30S',
                    {
                      id:'',
                      prospectInfo: {
                        comment:'..Hey...',
                      },
                    }
                  ],
                  [
                    '36',
                    {
                      id:'',
                      prospectInfo: {
                        comment:'..Hey...',
                      },
                    }
                  ],
                  [
                    '38A',
                    {
                      id:'',
                      prospectInfo: {
                        comment:'..Hey...',
                      },
                    }
                  ],
                  [
                    '42',
                    {
                      id:'',
                      prospectInfo: {
                        comment:'..Hey...',
                      },
                    }
                  ],
                  [
                    '44F',
                    {
                      id:'',
                      prospectInfo: {
                        comment:'..Hey...',
                      },
                    }
                  ],
                  [
                    '46',
                    {
                      id:'',
                      prospectInfo: {
                        comment:'..Hey...',
                      },
                    }
                  ],
                  [
                    '50U',
                    {
                      id:'',
                      prospectInfo: {
                        comment:'..Hey...',
                      },
                    }
                  ],
                ]
              ), //list
            },
          ], // numbers 1


          [
            '-street-2',
            {
              list: new Map(
                [
                  [
                    '28F',
                    {
                      id:'',
                      prospectInfo: {
                        comment:'..Hey...',
                      },
                    }
                  ],
                  [
                    '30S',
                    {
                      id:'',
                      prospectInfo: {
                        comment:'..Hey...',
                      },
                    }
                  ],
                  [
                    '32',
                    {
                      id:'',
                      prospectInfo: {
                        comment:'..Hey...',
                      },
                    }
                  ],
                  [
                    28,
                    {
                      id:'',
                      prospectInfo: {
                        comment:'..Hey...',
                      },
                    }
                  ],
                  [
                    '30S',
                    {
                      id:'',
                      prospectInfo: {
                        comment:'..Hey...',
                      },
                    }
                  ],
                  [
                    '36',
                    {
                      id:'',
                      prospectInfo: {
                        comment:'..Hey...',
                      },
                    }
                  ],
                  [
                    '38A',
                    {
                      id:'',
                      prospectInfo: {
                        comment:'..Hey...',
                      },
                    }
                  ],
                  [
                    '42',
                    {
                      id:'',
                      prospectInfo: {
                        comment:'..Hey...',
                      },
                    }
                  ],
                  [
                    '44F',
                    {
                      id:'',
                      prospectInfo: {
                        comment:'..Hey...',
                      },
                    }
                  ],
                  [
                    '46',
                    {
                      id:'',
                      prospectInfo: {
                        comment:'..Hey...',
                      },
                    }
                  ],
                  [
                    '50U',
                    {
                      id:'',
                      prospectInfo: {
                        comment:'..Hey...',
                      },
                    }
                  ],
                ]
              ), //list
            },
          ], // numbers 2
        ]
      ), // numbers
  
      prospectInfo: {
        streetID: '',
        number: '',       // nouse, appartment, ...
        isSupporter: '',  // Will vote in favor of the candidate
        lawnSign: '',     // Wants the candidate sign on property lawn
      },
    };
    this.handleDataChange = this.handleDataChange.bind(this);
  }


  componentDidMount() {
    // this.resetStepIterator();
    let activeNumbersList = this.state.numbers.get('-street-0').list;
    // console.log('...', this.state.numbers.get('-street-0').list.values())

    // activeNumbersList.forEach(item => console.log('item=', item));

    this.setState({ activeNumbersList });
  }

  /**
   * Stop steps iterations:
   * - If prospect is not a supporter
   * - 
   */
  stopStep() {
  }



  handleDataChange(e, id){
    // console.log('....', e.target.name , ' - ', id);
    const { activeNumbersList } = this.state;
    const item = activeNumbersList.get(id);

    item.prospectInfo[e.target.name] = e.target.value;
    activeNumbersList.get(id, item);


    console.log('....item=', item.prospectInfo[e.target.name]);
    // prospectInfo[e.target.name] = e.target.value;
    this.setState({ activeNumbersList });
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
                  { this.state.streetsList[0].name } 
                </Badge>
              </Link>

              <Route
                exact
                path="/:id"
                render={NumberBadge}
              />
            </p>
          </header>
          <div className="App-intro"> 

            <Route
              exact
              path="/"
              render={() => <ListOfNumbers list={this.state.activeNumbersList} /> }
            />

            {
              this.state.activeNumbersList && <Route
                path={`/:id`}
                // component={NumberView}
                render={ 
                  (props)=>{
                    // console.log('----esss-')

                    // console.log('***match.params.id=',props.match.params.id )
                    // console.log('***----=', this.state.activeNumbersList.get(props.match.params.id) )


                    return(
                      <NumberView
                        number={props.match.params.id}
                        data={ this.state.activeNumbersList.get(props.match.params.id) }
                        handleDataChange={this.handleDataChange}
                      />
                    )
                  } 
                }
              />
            }

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



const NumberBadge = ({ match }) => {
  console.log('match.params.id=',match.params.id)
  if(!match.params.id){
    return false;
  }

  return(
    <React.Fragment>
      {' / '}
      <Badge color="primary">
        { match.params.id }
      </Badge>
    </React.Fragment>
  );
}




const ListOfNumbers = ({ list }) => {
  if(!list) {
    return false;
  }

  // console.log('...>>>>', list)
  let newList = Array.from(list.values())

  return (
    <section className="square-listing">
      {
        // console.log('...', list.entries() ) 
        newList.map(item => (
          <Link
            key={item.id}
            className="button btn-primary square"
            // color="primary"
            to={`/${item.id}`}
          >
            { item.id }
          </Link> 
        ))
      }
    </section>
  )
};

export default App;

