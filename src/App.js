import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
 
import { Badge } from 'reactstrap';
import LocationIcon from '@material-ui/icons/LocationOn'; 

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
 

import NumberView from './terminals/NumberView.js';

import AppBar from './terminals/AppBar.js';
import AppDrawer from './terminals/AppDrawer.js';



import AbsentIcon from '@material-ui/icons/CallMissedOutgoing';
import SupporterIcon from '@material-ui/icons/SentimentVerySatisfied';
import UndecidedIcon from '@material-ui/icons/Help';
import NonSupporterIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import PosterSignIcon from '@material-ui/icons/PictureInPicture';
import CommentIcon from '@material-ui/icons/Comment'; 
import CompletedIcon from '@material-ui/icons/DoneOutline';

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
      drawer: {
        active: false,
      },
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
                        comment: null,
                      },
                    }
                  ],
                  [
                    '30S',
                    {
                      id:'30S',
                      prospectInfo: {
                        comment: null,
                      },
                    }
                  ],
                  [
                    '32',
                    {
                      id:'32',
                      prospectInfo: {
                        comment: null,
                      },
                    }
                  ],
                  [
                    '34U',
                    {
                      id:'34U',
                      prospectInfo: {
                        comment: null,
                      },
                    }
                  ],
                  [
                    '30S',
                    {
                      id:'30S',
                      prospectInfo: {
                        comment: null,
                      },
                    }
                  ],
                  [
                    '36',
                    {
                      id:'36',
                      prospectInfo: {
                        comment: null,
                      },
                    }
                  ],
                  [
                    '38A',
                    {
                      id:'38A',
                      prospectInfo: {
                        comment: null,
                      },
                    }
                  ],
                  [
                    '42',
                    {
                      id:'42',
                      prospectInfo: {
                        comment: null,
                      },
                    }
                  ],
                  [
                    '44F',
                    {
                      id:'44F',
                      prospectInfo: {
                        comment: null,
                      },
                    }
                  ],
                  [
                    '46',
                    {
                      id:'46',
                      prospectInfo: {
                        comment: null,
                      },
                    }
                  ],
                  [
                    '50U',
                    {
                      id:'50U',
                      prospectInfo: {
                        comment: null,
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
                        comment: null,
                      },
                    }
                  ],
                  [
                    '30S',
                    {
                      id:'',
                      prospectInfo: {
                        comment: null,
                      },
                    }
                  ],
                  [
                    '32',
                    {
                      id:'',
                      prospectInfo: {
                        comment: null,
                      },
                    }
                  ],
                  [
                    '28F',
                    {
                      id:'',
                      prospectInfo: {
                        comment: null,
                      },
                    }
                  ],
                  [
                    '30S',
                    {
                      id:'',
                      prospectInfo: {
                        comment: null,
                      },
                    }
                  ],
                  [
                    '36',
                    {
                      id:'',
                      prospectInfo: {
                        comment: null,
                      },
                    }
                  ],
                  [
                    '38A',
                    {
                      id:'',
                      prospectInfo: {
                        comment: null,
                      },
                    }
                  ],
                  [
                    '42',
                    {
                      id:'',
                      prospectInfo: {
                        comment: null,
                      },
                    }
                  ],
                  [
                    '44F',
                    {
                      id:'',
                      prospectInfo: {
                        comment: null,
                      },
                    }
                  ],
                  [
                    '46',
                    {
                      id:'',
                      prospectInfo: {
                        comment: null,
                      },
                    }
                  ],
                  [
                    '50U',
                    {
                      id:'',
                      prospectInfo: {
                        comment: null,
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
                        comment: null,
                      },
                    }
                  ],
                  [
                    '30S',
                    {
                      id:'',
                      prospectInfo: {
                        comment: null,
                      },
                    }
                  ],
                  [
                    '32',
                    {
                      id:'',
                      prospectInfo: {
                        comment: null,
                      },
                    }
                  ],
                  [
                    28,
                    {
                      id:'',
                      prospectInfo: {
                        comment: null,
                      },
                    }
                  ],
                  [
                    '30S',
                    {
                      id:'',
                      prospectInfo: {
                        comment: null,
                      },
                    }
                  ],
                  [
                    '36',
                    {
                      id:'',
                      prospectInfo: {
                        comment: null,
                      },
                    }
                  ],
                  [
                    '38A',
                    {
                      id:'',
                      prospectInfo: {
                        comment: null,
                      },
                    }
                  ],
                  [
                    '42',
                    {
                      id:'',
                      prospectInfo: {
                        comment: null,
                      },
                    }
                  ],
                  [
                    '44F',
                    {
                      id:'',
                      prospectInfo: {
                        comment: null,
                      },
                    }
                  ],
                  [
                    '46',
                    {
                      id:'',
                      prospectInfo: {
                        comment: null,
                      },
                    }
                  ],
                  [
                    '50U',
                    {
                      id:'',
                      prospectInfo: {
                        comment: null,
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
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.handleDataChange = this.handleDataChange.bind(this);
  }


  componentDidMount() {
    // this.resetStepIterator();
    let activeNumbersList = this.state.numbers.get('-street-0').list;
    // console.log('...', this.state.numbers.get('-street-0').list.values())

    // activeNumbersList.forEach(item => console.log('item=', item));

    this.setState({ activeNumbersList });
  }



  toggleDrawer() {
    const { drawer } = this.state;
    drawer.active = !drawer.active;
    this.setState({ drawer });
  }


  



  handleDataChange(e, id){
    // console.log('....', e.target.name , ' - ', id);
    const { activeNumbersList } = this.state;
    const item = activeNumbersList.get(id);

    item.prospectInfo[e.target.name] = e.target.value;
    activeNumbersList.get(id, item);


    console.log('....e.target.value=', e.target.value);
    // console.log('....item=', item.prospectInfo[e.target.name]);
    // prospectInfo[e.target.name] = e.target.value;
    this.setState({ activeNumbersList });
  }


  // handleSelection(e, id){
  //   console.log('- handleSelection = ', e.target.name, ' - ', id);
  // }


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
    });
  }

 


  render() {
    return (
      <Router>
        <div className="App">
          <AppBar
            toggleDrawer={this.toggleDrawer}
          />

          <AppDrawer
            {...this.state.drawer}
            toggleDrawer={this.toggleDrawer}
            dataList={this.state.activeNumbersList}
          />
          
          <div className="App-intro"> 

            <Route
              exact
              path="/"
              render={() => <ListOfNumbers list={this.state.activeNumbersList} /> }
            />

            {
              this.state.activeNumbersList && <Route
                path={`/:id`} 
                render={ 
                  (props)=>{
                    
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
          </div>
           
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
            className={`button square ${(item.prospectInfo.status?`btn-secondary`:`btn-primary active`)}`}
            // color="primary"
            to={`/${item.id}`}
          >
            { item.id }
            <StatusIcon
              className="square--info"
              {...item.prospectInfo}
            />
          </Link> 
        ))
      }
    </section>
  )
};


const StatusIcon = ({ status, comment, sign, className }) => {
  if(!status) {
    return false;
  }
  return(
    <React.Fragment>
      <span className="icon-completed-frame">
        <CompletedIcon
          className="icon-completed"
        />
      </span>

      <span className={className}>
        { status==='absent' && <AbsentIcon style={{ fontSize:'12px'}} /> }
        { status==='yes' && <SupporterIcon style={{ fontSize:'12px'}} /> }
        { status==='undecided' && <UndecidedIcon style={{ fontSize:'12px'}} /> }
        { status==='no' && <NonSupporterIcon style={{ fontSize:'12px'}} /> }
        { sign==='small' && <PosterSignIcon style={{ fontSize:'12px'}} /> }
        { sign==='big' && <PosterSignIcon style={{ fontSize:'12px'}} /> }
        { comment && <CommentIcon style={{ fontSize:'12px'}} /> }
      </span>
    </React.Fragment>
  );
};


export default App;

