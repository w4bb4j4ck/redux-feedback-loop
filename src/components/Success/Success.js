import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

const styles = theme => ({
  button: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
});

class Success extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <>
      <h2>Thank you!</h2>
      <Link to='/'>
        <Fab variant="extended" color="primary" aria-label="Add" className={classes.margin}>
          Take another survey
        </Fab>
      </Link>
      </>
    );
  }
}

export default withStyles(styles)(Success);
