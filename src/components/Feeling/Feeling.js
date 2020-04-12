import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './Feeling.css';

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
    width: 80,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

class Feeling extends Component {

  state = {
    number: '',
  }

  handleChange = (event) => {
    this.setState({
      ...this.state, number: event.target.value
    })
  }

  handleClick = () => {
    this.props.dispatch({type:'REVIEW', payload:{number: this.state.number, stage: 'feeling'}})
  }

  render() {
    const classes = this.props.classes;
    return (
      <>
      <div className="text-field">
      <h2>How are you feeling today?</h2>
      <TextField
          required
          id="standard-required"
          label="Feeling"
          type="number"
          className={classes.textField}
          margin="normal"
          value={this.state.number}
          onChange={this.handleChange}
        />
        </div>
        <div className="btn-group">
      {this.state.number === ''
      ? <Button variant="contained" className={classes.button} disabled>Next</Button>
      :<Link to='/understanding'>
        <Button variant="contained" color="primary" className={classes.button} 
        onClick={this.handleClick}>Next</Button>
      </Link>}
      </div>
      </>
    );
  }
}

export default withStyles(styles)(connect()(Feeling));
