import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    width: '100%',
    // border: '10px solid red',
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  select: {
    color: '#fff!important',
    // width: '100%',
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
          {/* <InputLabel htmlFor="street-simple">street</InputLabel> */}
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
            {/* <MenuItem value="">
              <em>None</em>
            </MenuItem> */}
            {/* <MenuItem value={0}>John Garland Blv</MenuItem>
            <MenuItem value={1}>Twenty</MenuItem>
            <MenuItem value={2}>Thirty</MenuItem> */}
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