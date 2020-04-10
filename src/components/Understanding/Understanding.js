import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Understanding extends Component {

  state = {
    number: '',
  }

  handleChange = (event) => {
    this.setState({
      ...this.state, number: event.target.value
    })
  }

  render() {
    return (
      <>
      <h2>How well are you understanding the content?</h2>
      <label>Understanding?</label>
      <input type="number" />
      {this.state.number === ''
      ? <button disabled>Next</button>
      :<Link to='/support'>
        <button>Next</button>
      </Link>}
      </>
    );
  }
}

export default Understanding;