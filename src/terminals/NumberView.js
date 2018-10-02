import React from 'react';
import PropTypes from 'prop-types';
import { Button, Badge } from 'reactstrap';
import { BrowserRouter as Route, Redirect } from "react-router-dom";


import AbsentIcon from '@material-ui/icons/CallMissedOutgoing';
import SupporterIcon from '@material-ui/icons/SentimentVerySatisfied';
import UndecidedIcon from '@material-ui/icons/Help';
import NonSupporterIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import PosterSignIcon from '@material-ui/icons/PictureInPicture';



const NumberStatus = ({ title, statusValue, signValue, optionList, signList, handleDataChange }) => {
  return(
    <React.Fragment>
      <div className="stepPanel--content">
        <h3>{ title }</h3>

        <ul className="list-unstyled list-inline">
          {
            optionList.map(option => {
              return (
                <li
                  key={option.text}
                  className="list-inline-item">
                  <Button
                    className="stepPanel__option"
                    onClick={handleDataChange}
                    name="status"
                    value={option.text}
                    color={(statusValue===option.text?`primary`:``)}
                  >
                    <small className="avoid-clicks">{ option.icon() }</small>
                    <small className="avoid-clicks">{ option.text }</small>
                  </Button>
                </li>
              )
            })
          }
        </ul>
      </div>
      
      {
        (statusValue==='yes' || statusValue==='undecided') && 
        <div className="stepPanel--content" style={{ marginTop:'30px'}}>
          <h3>Needs a sign?</h3>
          {
            signList.map(option => {
              return (
                <li
                  key={option.text}
                  className="list-inline-item">
                  <Button
                    className="stepPanel__option"
                    onClick={handleDataChange}
                    name="sign"
                    value={option.text}
                    color={(signValue===option.text?`primary`:``)}
                  >
                    <small className="avoid-clicks">{ option.icon() }</small>
                    <small className="avoid-clicks">{ option.text }</small>
                  </Button>
                </li>
              )
            })
          }
        </div>
      }
      


      <h3 className="stepPanel--info">
        {
          !statusValue && 'No status yet'
        }

        {
          statusValue && 
          <React.Fragment>
            <small>{ 'How this person feels about the candidate?' }</small>
            <Badge color="primary">
              { statusValue==='absent' && 'Person was absent' }
              { statusValue==='yes' && 'Is a supporter' }
              { statusValue==='no' && 'Not a supporter' }
              { statusValue==='undecided' && 'Still undecided' }
            </Badge>
          </React.Fragment>
        }
      </h3>

    </React.Fragment>
  );
};



const NumberComment = ({ title, value, handleChange }) => {
  return(
    <React.Fragment>
      <h3 className="stepPanel--content">{ title }</h3>
      <div className="form-group stepPanel--content">
        {/* <label for="exampleFormControlTextarea1">Example textarea</label> */}
        <textarea
          name="comment"
          className="form-control"
          rows="3"
          value={value}
          onChange={handleChange}
        />
      </div>

      <h3 className="stepPanel--info">
        {
          !value && 'No comments yet'
        }

        {
          value && 
          <React.Fragment>
            <small>{ 'Any comment left?' }</small>
            <Badge color="primary">
              { value }
            </Badge>
          </React.Fragment>
        }
      </h3>

      
    </React.Fragment>
  );
};



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
              saveProspectInfo={this.saveProspectInfo}
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
              saveProspectInfo={this.saveProspectInfo}
              handleChange={(e)=>this.props.handleDataChange(e, this.state.number )} //handleChange}
              title='Comment'
              value={this.state.info.comment}
            />
          ), 
        },
      ],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.saveProspectInfo = this.saveProspectInfo.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  componentDidMount() {

    console.log('--DidMount -> props=', this.props )

    this.setState({ 
      number: this.props.number,
      info: this.props.data.prospectInfo
    });
  }


  handleChange(event) {
    console.log(event.target.name);
    const { info } = this.state;
    info[event.target.name] = event.target.value;
    this.setState({ info });
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
  saveProspectInfo(propName, value, index) {

    console.log('????')

    //this.jumpToStep(1) //

    // !step.active && 
    // let { steps, prospectInfo } = this.state;
    // this.setState({ steps, prospectInfo });

    // console.log('....', propName, index,  value);

    // if(propName==='number' || propName==='isSupporter' || propName==='lawnSign') {
    //   prospectInfo[propName] = value;
    //   // console.log('...propName=', propName, value);
    //   this.setState({ steps, prospectInfo });

    //   this.jumpToStep(index + 1);
    // }

  }






  jumpToStep(stepIndex) {
    // console.log('Jump to: ', stepIndex);
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


  handleSubmit() {
    console.log('...handleSubmit');
    // Save info to parent object ...
    this.setState({ redirectHome:true });
    
  }


  render() {

  const title='dewdewdew',
  isSupporter='dq', lawnSign='dwqdwqdq', number='dwqdqww', stepName='dqwdqw', itemIndex=2;
// console.log('...>>>>', this.state.match);


    if(this.state.redirectHome) {
      return <Redirect to='/' />;
    }

    return (
      <Route>
      <section className='view'>
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
       
        
         
        
        <div
          style={{ display:'none' }}
          className={`stepPanel `}
          // onClick={ ()=>this.jumpToStep(index) }
        >
          <h3 className="stepPanel--info">
            <small>{ title }</small>
            
            <Badge color="primary">
              {
                stepName==='isSupporter' && isSupporter
              }
              {
                stepName==='lawnSign' && lawnSign
              }
              {
                stepName==='number' && number
              }
            </Badge>
          </h3>

          <div className="stepPanel--decorator">
            <h3>{ title }</h3>

            <ul className="list-unstyled list-inline">
              {
                /*this.props.type === 'bool' &&*/ ['yes','undecided','no'].map(option => {
                  return (
                    <li
                      key={option}
                      className="list-inline-item">
                      <Button
                        // color={ this.activateButton(stepName, option, isSupporter, lawnSign) }
                        onClick={()=>{ this.recVal(stepName, option, itemIndex)} }>
                        { option }
                      </Button>
                    </li>
                  )
                })
              }
            </ul>
          </div>


  


          {
            // this.props.type === 'submit' && 
            <Button color="danger" className="text-uppercase font-weight-bold">Submit</Button>
          }
          
        </div>
        <footer className="view--footer">
          <Button
            color="danger"
            className="text-uppercase font-weight-bold"
            onClick={this.handleSubmit}
          >Done</Button>
        </footer>

      </section>
      </Route>
    );
  }

}

export default NumberView;