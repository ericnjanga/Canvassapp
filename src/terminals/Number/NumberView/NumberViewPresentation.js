import React from 'react';
import { Button } from 'reactstrap';


const NumberViewPresentation = ({
  steps,
  handleDone,
  jumpToStep,
}) => {

  return (

    <React.Fragment>
      <section>
        {
          steps.map((step, index) => {
            return (
              <div
                key={step.name}
                onClick={ ()=>jumpToStep(index) }
                className={`stepPanel stepPanel-${index + 1} ${step.active?`active`:``}`}
              >
                { step.render() }
              </div>
            )
          })
        }
        
        <footer className="view--footer">
          <Button
            color="danger"
            className="text-uppercase font-weight-bold"
            onClick={handleDone}
          >
            Done
          </Button>
        </footer>
      </section> 
    </React.Fragment>
  );
};

NumberViewPresentation.defaultProps = {
  steps: [],
};

export default NumberViewPresentation;
