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

class DropdownSelect extends React.Component {
  state = {
    activeOption: '',
  };

  componentDidMount() {
    const { list } = this.props;
    this.setState({ list, activeOption:list[0].id });
  }

  // handleChange = event => {
  //   this.setState({ activeOption: event.target.value });
  // };

  render() {
    const { classes } = this.props;

    if(!this.state.list) {
      return false;
    }

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={`${classes.formControl} appBar-selector`}>
          <Select
            className={classes.select}
            value={this.state.activeOption}
            onChange={this.props.handleChange}
            inputProps={{
              name: 'street',
              id: 'street-simple',
            }}
          >
            {
              this.state.list.map(item => {
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
