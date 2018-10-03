import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'; 
import MenuItem from '@material-ui/core/MenuItem'; 
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


/**
 * Street Selector:
 * - Renders the list of street in a dropdown
 * --------------------------------
 */


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    width: '100%', 
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  select: {
    color: '#fff!important', 
    textAlign: 'left',
  },
});

class SimpleSelect extends React.Component {
  state = {
    streetsList: [
      {
        id: 0,
        name: 'John Garland Blv',
      },
      {
        id: 1,
        name: 'Beaver Bend Cres',
      },
      {
        id: 2,
        name: 'Ernest Dockray Ave',
      },
    ],
    name: 'hai',
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={`${classes.formControl} appBar-selector`}>
          <Select
            className={classes.select}
            value={this.state.streetsList[0].id}
            onChange={this.handleChange}
            inputProps={{
              name: 'street',
              id: 'street-simple',
            }}
          >
            {
              this.state.streetsList.map(item => {
                return(
                  <MenuItem
                    key={item.id}
                    value={item.id}
                  >
                    {item.name}
                  </MenuItem>
                );
              })
            }
          </Select>
        </FormControl>
      </form>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);
