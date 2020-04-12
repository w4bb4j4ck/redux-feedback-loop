import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  button: {
    margin: theme.spacing(1),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

class Support extends Component {

  state = {
    number: '',
  }

  handleChange = (event) => {
    this.setState({
      ...this.state, number: event.target.value
    })
  }

  handleClick = () => {
    this.props.dispatch({type:'REVIEW', payload:{number: this.state.number, stage: 'support'}})
  }

  render() {
    const classes = this.props.classes;
    return (
      <>
      <h2>How well are you being supported?</h2>
      <TextField
          required
          id="standard-required"
          label="Support"
          type="number"
          className={classes.textField}
          margin="normal"
          value={this.state.number}
          onChange={this.handleChange}
        />
      {this.state.number === ''
      ? <Button variant="contained" className={classes.button} disabled>Next</Button>
      :<Link to='/comments'>
        <Button variant="contained" color="primary" className={classes.button} onClick={this.handleClick}>Next</Button>
      </Link>}
      <Link to='/understanding'>
        <Button variant="contained" color="secondary" className={classes.button}>Back</Button>
      </Link>
      </>
    );
  }
}

export default withStyles(styles)(connect()(Support));
