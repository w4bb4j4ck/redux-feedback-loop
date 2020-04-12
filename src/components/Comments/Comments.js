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

class Comments extends Component {

  state = {
    comment: '',
  }

  handleChange = (event) => {
    this.setState({
      ...this.state, comment: event.target.value
    })
  }

  handleClick = () => {
    this.props.dispatch({type:'REVIEW', payload:{number: this.state.comment, stage: 'comments'}})
  }

  render() {
    const classes = this.props.classes;
    return (
      <>
      <h2>Any comments you want to leave?</h2>
      <TextField
          id="standard-name"
          label="Comments"
          className={classes.textField}
          value={this.state.comment}
          onChange={this.handleChange}
          margin="normal"
        />
      <Link to='/review'>
        <Button variant="contained" color="primary" className={classes.button} onClick={this.handleClick}>Next</Button>
      </Link>
      <Link to='/support'>
        <Button variant="contained" color="secondary" className={classes.button}>Back</Button>
      </Link>
      </>
    );
  }
}

export default withStyles(styles)(connect()(Comments));
