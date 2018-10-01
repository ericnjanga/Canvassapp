import React from 'react';
import PropTypes from 'prop-types';
import { Button, Badge } from 'reactstrap';
import { BrowserRouter as Route, Redirect } from "react-router-dom";


import AbsentIcon from '@material-ui/icons/PersonAddDisabled';
import SupporterIcon from '@material-ui/icons/Favorite';
import UndecidedIcon from '@material-ui/icons/Help';
import NonSupporterIcon from '@material-ui/icons/ThumbDown';



const NumberStatus = ({ title, optionList }) => {
  return(
    <React.Fragment>
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
                  // color={ this.activateButton(stepName, option, isSupporter, lawnSign) }
                  // onClick={()=>{ this.recVal(stepName, option, itemIndex)} }
                >
                  { option.icon() }
                  <small>{ option.text }</small>
                </Button>
              </li>
            )
          })
        }
      </ul>


{/* <h3 className="stepPanel--info">
  <small>{ 'Is the person absent? title' }</small>
  
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
</h3> */}
    </React.Fragment>
  );
};



const NumberComment = ({ title, value, handleChange }) => {
  return(
    <React.Fragment>
      <h3>{ title }</h3>
      <div className="form-group">
        {/* <label for="exampleFormControlTextarea1">Example textarea</label> */}
        <textarea
          name="comment"
          className="form-control"
          rows="3"
          value={value}
          onChange={handleChange}
        />
      </div>

      {/* <div>
        <Button
          // color={ this.activateButton(stepName, option, isSupporter, lawnSign) }
           } }
          >
          SAVE
        </Button>
      </div> */}
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
      steps: [
        { 
          title:'Status',
          name:'status',
          render:()=>(
            <NumberStatus
              title='Status'
              // onClick={ ()=>this.jumpToStep(0) }
              saveProspectInfo={this.saveProspectInfo}
              optionList={this.state.statusList}
            />
          ),
        },
        { 
          title:'Comment?',
          name:'comment',
          render: ()=>(
            <NumberComment  
              saveProspectInfo={this.saveProspectInfo}
              handleChange={(e)=>this.props.handleDataChange(e, this.state.number )} //handleChange}
              title='Any Comment?'
              value={this.state.info.comment}
            />
          ), 
          active:true,
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
            /*this.props.type === 'textInput' &&  */
            <div className="input-group">
              <input
                className="form-control"
                type="text"
                name="number"
                value={ number}
                // onChange={this.props.handleChange}
              />
              <div className="input-group-append">
                <Button
                  // onClick={()=>this.recVal(stepName, this.props.number, itemIndex)}
                >ok</Button>
              </div>
            </div>
          }




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