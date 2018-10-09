import React from 'react';

import AbsentIcon from '@material-ui/icons/CallMissedOutgoing';
import SupporterIcon from '@material-ui/icons/SentimentVerySatisfied';
import UndecidedIcon from '@material-ui/icons/Help';
import NonSupporterIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import PosterSignIcon from '@material-ui/icons/PictureInPicture';
import CommentIcon from '@material-ui/icons/Comment'; 
import CompletedIcon from '@material-ui/icons/DoneOutline';



export const FeedbackIcon = ({
  status, comment, sign
}) => {
  return (
    <React.Fragment>
      { status==='absent' && <AbsentIcon style={{ fontSize:'12px'}} /> }
      { status==='yes' && <SupporterIcon style={{ fontSize:'12px'}} /> }
      { status==='undecided' && <UndecidedIcon style={{ fontSize:'12px'}} /> }
      { status==='no' && <NonSupporterIcon style={{ fontSize:'12px'}} /> }
      { sign==='small' && <PosterSignIcon style={{ fontSize:'12px'}} /> }
      { sign==='big' && <PosterSignIcon style={{ fontSize:'12px'}} /> }
      { comment && comment!=='' && <CommentIcon style={{ fontSize:'12px'}} /> }
    </React.Fragment>
  );
}


/**
 * NumberPreview:
 * Print the preview of the status of a canvassing"
 * --------------------------------
 */

const NumberPreview = ({ status, comment, sign, className }) => {
  if(!status) {
    return false;
  }
  return(
    <React.Fragment>
      <span className="icon-completed-frame">
        <CompletedIcon
          className="icon-completed"
        />
      </span>

      <span className={className}>
        <FeedbackIcon
          status={status}
          comment={comment}
          sign={sign}
        />
        
      </span>
    </React.Fragment>
  );
};


// const 

export default NumberPreview;
