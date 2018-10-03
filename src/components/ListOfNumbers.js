
import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

import StatusIcon from './StatusIcon.js';


/**
 * List of numbers:
 * - Renders each number of a list:
 * -- a link (each pointing to a number view)
 * -- a status
 * --------------------------------
 */


const ListOfNumbers = ({ list }) => {
  if(!list) {
    return false;
  }

  let newList = Array.from(list.values())

  return (
    <section className="square-listing">
      {
        newList.map(item => (
          <Link
            key={item.id}
            className={`button square ${(item.prospectInfo.status?`btn-secondary`:`btn-primary active`)}`}
            to={`/${item.id}`}
          >
            { item.id }
            <StatusIcon
              className="square--info"
              {...item.prospectInfo}
            />
          </Link>
        ))
      }
    </section>
  )
};

export default ListOfNumbers;
