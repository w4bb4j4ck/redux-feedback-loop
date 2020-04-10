import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Feeling extends Component {
  render() {
    return (
      <>
      <h2>How are you feeling today?</h2>
      <label>Feeling?</label>
      <input type="number" />
      <Link to='/understanding'>
        <button>Next</button>
      </Link>
      </>
    );
  }
}

export default Feeling;
