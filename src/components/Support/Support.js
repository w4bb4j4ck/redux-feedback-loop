import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Support extends Component {
  render() {
    return (
      <>
      <h2>How well are you being supported?</h2>
      <label>Support?</label>
      <input type="number" />
      <Link to='/comments'>
        <button>Next</button>
      </Link>
      </>
    );
  }
}

export default Support;
