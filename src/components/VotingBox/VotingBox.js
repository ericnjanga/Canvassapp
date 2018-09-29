import React from 'react';
import PropTypes from 'prop-types';

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
              name="number"
              value={this.props.number}
              onChange={this.props.handleChange}
            />
            <button
              onClick={()=>this.recVal(this.props.name, this.props.number)}
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
