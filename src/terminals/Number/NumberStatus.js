import React from 'react';
import { Button } from 'reactstrap';


/**
 * Display status information about <NumberView />
 * - Display "selection steps" ("select buttons", "sign button")
 * -- Display "select buttons" statuses
 * -- Display "sign button" statuses (if user has clicked "yes" or "uncertain")
 * - Display "info recap" which display selected info (useful when user has moved to another step)
 * @param {*} param0 
 */


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
                    color={(statusValue===option.text?`primary`:`default`)}
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

    </React.Fragment>
  );
};

export default NumberStatus;
