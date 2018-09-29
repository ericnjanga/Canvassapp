import React from 'react';
import PropTypes from 'prop-types';

/**
 * 
 * @title: ...
 */
export default class VotingBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.recVal = this.props.handleSubmit;
  }


  handleChange(e){
    // console.log();
    this.setState({ [e.target.name]:e.target.value });
  }


  render() {
    return(
      <div className={`voterbox ${this.props.className}`}>
        <h3>{ this.props.title }</h3>
        
        {
          this.props.type === 'bool' && 
          <ul className="list-unstyled list-inline">
            <li>
              <button onClick={()=>this.recVal(this.props.name, 'yes')}>Yes</button>
            </li>
            <li>
              <button onClick={()=>this.recVal(this.props.name, 'undecided')}>Undecided</button>
            </li>
            <li>
              <button onClick={()=>this.recVal(this.props.name, 'no')}>No</button>
            </li>
          </ul>
        }
        
        {
          this.props.type === 'textInput' && 
          <div>
            <input
              type="text"
              name="inputText"
              value={this.state.inputText}
              onChange={this.handleChange}
            />
            <button
              onClick={()=>this.recVal(this.props.name, this.state.inputText)}
            >ok</button>
          </div>
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
