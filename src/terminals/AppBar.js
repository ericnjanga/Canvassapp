import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import StreetSelector from './StreetSelector.js';

import { appInfo } from './../settings/settings2.js';


/**
 * App Bar (top Fixed)
 * --------------------------------
 */


const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  }, 
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  dropdown: {
    width: '100%',
  },
});

class PrimarySearchAppBar extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  render() {
    const { classes, streetsList, activeStreet } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
              <MenuIcon
                onClick={this.props.toggleDrawer}
              />
            </IconButton>
            <Typography className={classes.title} variant="title" color="inherit" noWrap>
              { appInfo.name }
            </Typography>
            <div className={classes.dropdown}>
              {
                activeStreet &&
                <StreetSelector
                  
                  list={streetsList}
                  defaultStreet={activeStreet.id}
                  handleChange={this.props.handleStreetChange}
                />
              }
            </div>
            <div className={classes.grow} />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrimarySearchAppBar);