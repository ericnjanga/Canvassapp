import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'; 
import MenuItem from '@material-ui/core/MenuItem'; 
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { streetsList } from './../settings/setting1.js';


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


class DropdownSelect extends React.Component {
  state = {
  };

  static displayName = 'StreetSelector';
  static defaultProps = {
    optionList: streetsList,
  };

  componentDidMount() {
    const { list } = this.props;
    this.setState({ list });
  }


  render() {
    const { classes, optionList, handleChange } = this.props;

    if(!optionList) {
      return false;
    }

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={`${classes.formControl} appBar-selector`}>
          <Select
            className={classes.select}
            value={this.props.defaultStreet}
            onChange={handleChange}
            inputProps={{
              name: 'street',
              id: 'street-simple',
            }}
          >
            {
              optionList.map(item => {
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

DropdownSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};




export default withStyles(styles)(DropdownSelect);
