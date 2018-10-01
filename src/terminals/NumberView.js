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



const NumberComment = ({ title }) => {
  return(
    <React.Fragment>
      <h3>{ title }</h3>
      <div class="form-group">
        {/* <label for="exampleFormControlTextarea1">Example textarea</label> */}
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>

      <div>
        <Button
          // color={ this.activateButton(stepName, option, isSupporter, lawnSign) }
          // onClick={()=>{ this.recVal(stepName, option, itemIndex)} }
          >
          SAVE
        </Button>
      </div>
    </React.Fragment>
  );
};



class NumberView extends React.Component { //({ match }) => 

  constructor(props) {
    super(props);
    this.state = {
      redirectHome: false,
      match: null,
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
      steps: [
        { 
          title:'Status',
          name:'status',
          render:()=>(
            <NumberStatus
              title='Status'
              optionList={this.state.statusList}
            />
          ),
          active:true
        },
        { 
          title:'Comment?',
          name:'comment',
          render: ()=>(
            <NumberComment
              title='Any Comment?'
            />
          ), },
      ],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount() {
    this.setState({ match:this.props.match });
  }


  handleSubmit() {
    console.log('...handleSubmit');
    // Save info to parent object ...
    this.setState({ redirectHome:true });
    
  }


  render() {

  const title='dewdewdew',
  isSupporter='dq', lawnSign='dwqdwqdq', number='dwqdqww', stepName='dqwdqw', itemIndex=2;
console.log('...>>>>', this.state.match);

    // <div>{ match.params.id }</div>

    if(this.state.redirectHome) {
      return <Redirect to='/' />;
    }

    return (
      <Route>
      <section class='view'>
        {
          this.state.steps.map((step, index) => {
            return (
              <div
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
          // onClick={this.props.onClick}
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