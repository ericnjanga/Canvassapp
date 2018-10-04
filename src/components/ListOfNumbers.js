import React from 'react';
import { ThemeContext } from './../settings/init.js';
// Note: removing "Router" creates serious rendering issues
import { BrowserRouter as Router, Link } from "react-router-dom";

import StatusIcon from './StatusIcon.js';


/**
 * List of numbers:
 * - Renders each number of a list:
 * -- a link (each pointing to a number view)
 * -- a status
 * --------------------------------
 */


const ListOfNumbers = ({ list, className }) => {
  if(!list) {
    return false;
  }

  let newList = Array.from(list.values()); 

  return (
    <ThemeContext.Consumer>
      {
        (theme) => {
          const { colorCode } = theme;
          return (
            <section className={className}>
              {
                newList.map(item => (
                  <Link
                    key={item.id}
                    className={`button square ${(item.prospectInfo.status?`btn-secondary`:`${colorCode} btn-primary active`)}`}
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
        }
      }
      
    </ThemeContext.Consumer>
  )
};





export default ListOfNumbers;
