import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Badge from '@material-ui/core/Badge';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import AbsentIcon from '@material-ui/icons/CallMissedOutgoing';
import SupporterIcon from '@material-ui/icons/SentimentVerySatisfied';
import UndecidedIcon from '@material-ui/icons/Help';
import NonSupporterIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import PosterSignIcon from '@material-ui/icons/PictureInPicture';
import CommentIcon from '@material-ui/icons/Comment';  
import NotCompletedIcon from '@material-ui/icons/LineWeight';
import CompletedIcon from '@material-ui/icons/DoneOutline';
import LocationIcon from '@material-ui/icons/LocationOn';



/**
 * App Drawer
 * --------------------------------
 */


const styles = theme => ({
  root: {
    width: '100%',
  },
  listItem: {
    paddingLeft:'5px',
  },
  badge: {
    top: '-7px',
    right: '-7px',
  }
});

 

class TemporaryDrawer extends React.Component {

  render() {
    if(!this.props.dataList) {
      return false;
    }

    const totalStreets = this.props.dataList.size;

    const { classes } = this.props;
    const dataList = Array.from( this.props.dataList.values() );

    

    const totalSigns = dataList.filter(data => {
      return data.prospectInfo.sign;
    }).length;
    const totalSupporters = dataList.filter(data => {
      return data.prospectInfo.status && data.prospectInfo.status==='yes';
    }).length;
    const totalNonSupporters = dataList.filter(data => {
      return data.prospectInfo.status && data.prospectInfo.status==='no';
    }).length;
    const totalUndecided = dataList.filter(data => {
      return data.prospectInfo.status && data.prospectInfo.status==='undecided';
    }).length;
    const totalAbsent = dataList.filter(data => {
      return data.prospectInfo.status && data.prospectInfo.status==='absent';
    }).length;
    const totalComments = dataList.filter(data => {
      return data.prospectInfo.comment;
    }).length;
    const totalNotCompleted = dataList.filter(data => {
      return !data.prospectInfo.status;
    }).length;
    const totalCompleted = dataList.filter(data => {
      return data.prospectInfo.status;
    }).length;
 

    
    return (
      <Drawer open={this.props.active} onClose={this.props.toggleDrawer}>
        <List
          component="nav"
          onClick={this.props.toggleDrawer}
        >
          <header button style={{ position:'relative', paddingBottom:'25px' }}>
            <ListItem butto>
              <h1 className="appBar-title">Canvassing App</h1>
            </ListItem>

            <ListItem button style={{ position:'absolute', top:'35px', width:'100%' }}>
              <ListItemIcon>
                <LocationIcon
                  style={{ marginRight:0, color:'#007bff'  }}
                />
              </ListItemIcon>

              <Badge classes={{ badge: classes.badge }} color="secondary" badgeContent={totalStreets}>
                <ListItemText
                  style={{ paddingLeft:'5px' }}
                  primary="John Garland Blv"
                />
              </Badge> 
            </ListItem>

          </header>
        </List>
 

        <Divider /> 


        <List
          component="nav"
          onClick={this.props.toggleDrawer}
        >
          <ListItem button>
            <ListItemIcon>
              <AbsentIcon/>
            </ListItemIcon>
            <ListItemText className={classes.listItem} inset primary={`Absents (${totalAbsent})`} />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <SupporterIcon />
            </ListItemIcon>
            <ListItemText inset primary={`Supporters (${totalSupporters})`} />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <NonSupporterIcon />
            </ListItemIcon>
            <ListItemText inset primary={`Non-supporters (${totalNonSupporters})`} />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <UndecidedIcon />
            </ListItemIcon>
            <ListItemText inset primary={`Undecided (${totalUndecided})`} />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <PosterSignIcon />
            </ListItemIcon>
            <ListItemText inset primary={`Posters (${totalSigns})`} />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <CommentIcon />
            </ListItemIcon>
            <ListItemText inset primary={`Comments (${totalComments})`} />
          </ListItem>
        </List>


        <Divider />


        <List
          component="nav"
          onClick={this.props.toggleDrawer}
        >
          <ListItem button>
            <ListItemIcon>
              <NotCompletedIcon /> 
            </ListItemIcon>
            <ListItemText inset primary={`Remaining (${totalNotCompleted})`} />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <CompletedIcon />
            </ListItemIcon>
            <ListItemText inset primary={`Completed (${totalCompleted})`} />
          </ListItem>
        </List>


      </Drawer>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);