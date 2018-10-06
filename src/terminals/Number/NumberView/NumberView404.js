import React from 'react';
import { Button } from 'reactstrap';
import { BrowserRouter as Route, Redirect } from "react-router-dom";



const NumberView404 = ({
  number,
  activeStreet,
  handleReturnHome,
}) => {
  return (
    <Route>
      <section style={{marginTop:'30px'}}>
        <h2>Oh no!</h2>
        <p><b>{ number }</b> is not a number registered in <b>{ activeStreet.name }</b>. Please return home!</p>
        <div>

          <Button
            color="danger"
            className="text-uppercase font-weight-bold"
            onClick={handleReturnHome}
          >
            Return home
          </Button>
        </div>
      </section>
    </Route>
  );
};

export default NumberView404;

