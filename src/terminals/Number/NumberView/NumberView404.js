import React from 'react';
import { BrowserRouter as Route } from "react-router-dom";



const NumberView404 = ({
  number,
  activeStreet,
}) => {
  return (
    <Route>
      <section style={{marginTop:'30px'}}>
        <h2>Oh no!</h2>
        <p><b>{ number }</b> is not a number registered in <b>{ activeStreet.name }</b>. Please return home!</p>
      </section>
    </Route>
  );
};

export default NumberView404;

