import React from 'react';
import { Badge } from 'reactstrap';


/**
 * Display comment Panel information about <NumberView />
 * - Display "selection steps" ("select buttons", "sign button")
 * - Display "info recap" which display selected info (useful when user has moved to another step)
 * @param {*} param0 
 */


const NumberComment = ({ title, value, handleChange }) => {

  return(
    <React.Fragment>
      <div className="stepPanel--content">
        <h3>{ title }</h3>
        <div className="form-group">
          <textarea
            name="comment"
            className="form-control"
            rows="3"
            value={value}
            onChange={handleChange}
          />
        </div>
      </div>

      <h3 className="stepPanel--info">
        {
          value ?
          <React.Fragment>
            <small>{ 'Any comment left?' }</small>
            <Badge color="primary">
              { value }
            </Badge>
          </React.Fragment>
          :
          'No comments yet'
        }
      </h3>      
    </React.Fragment>
  );
};

export default NumberComment;
