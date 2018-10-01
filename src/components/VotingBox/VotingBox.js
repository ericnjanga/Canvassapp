import React from 'react';
import PropTypes from 'prop-types';
import { Button, Badge } from 'reactstrap';

/**
 * 
 * @title: ...
 */
export default class VotingBox extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   number: '',
    // };
    this.recVal = this.props.handleSubmit;
    this.activateButton = this.activateButton.bind(this);
  }


  activateButton(stepName, option, isSupporter, lawnSign) {
    return (stepName==='isSupporter' && isSupporter===option) || (stepName==='lawnSign' && lawnSign===option)?`primary`:``
  }




  render() {
    const { title, isSupporter, lawnSign, number, name:stepName, itemIndex } = this.props;
    console.log('....----', itemIndex );
    return(
      <div
        className={`stepPanel ${this.props.className}`}
        onClick={this.props.onClick}
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
          <h3>{ this.props.title }</h3>

          <ul className="list-unstyled list-inline">
            {
              this.props.type === 'bool' && ['yes','undecided','no'].map(option => {
                return (
                  <li
                    key={option}
                    className="list-inline-item">
                    <Button
                      color={ this.activateButton(stepName, option, isSupporter, lawnSign) }
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
          this.props.type === 'textInput' && 
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              name="number"
              value={this.props.number}
              onChange={this.props.handleChange}
            />
            <div className="input-group-append">
              <Button
                onClick={()=>this.recVal(stepName, this.props.number, itemIndex)}
              >ok</Button>
            </div>
          </div>
        }




        {
          this.props.type === 'submit' && 
          <Button color="danger" className="text-uppercase font-weight-bold">Submit</Button>
        }
        
      </div>
    );
  }
}




// Props validation
VotingBox.propTypes = {
  title: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

// VotingBox.defaultProps = {
//   modeCondenced: false,
// };
