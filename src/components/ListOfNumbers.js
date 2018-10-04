import React from 'react';
import { appInfo } from './../settings/settings2.js';
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


const ListOfNumbers = ({ list }) => {
  if(!list) {
    return false;
  }

  let newList = Array.from(list.values());

  // Render a different color of button each time
  let btnColor = localStorage.getItem(`${appInfo.id}-grid-btn-color`);
  btnColor = getRandomItem(['color1', 'coor2', 'color3', 'color4', 'color5', 'color6'], btnColor);
  localStorage.setItem(`${appInfo.id}-grid-btn-color`, btnColor);
  console.log('q', btnColor);

  return (
    <section className="square-listing">
      {
        newList.map(item => (
          <Link
            key={item.id}
            className={`button square ${(item.prospectInfo.status?`btn-secondary`:`${btnColor} btn-primary active`)}`}
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


const getRandomItem = (arr, val) => {
  console.log('---q', val)
  if(!arr) {
    return false;
  }

  let finalVal = arr[Math.floor(Math.random() * arr.length)]; 
  while(finalVal===val) {
    finalVal = arr[Math.floor(Math.random() * arr.length)];
  }
  return finalVal;
}



export default ListOfNumbers;
