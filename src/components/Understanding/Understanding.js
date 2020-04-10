import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Understanding extends Component {
  render() {
    return (
      <>
      <h2>How well are you understanding the content?</h2>
      <label>Understanding?</label>
      <input type="number" />
      <Link to='/support'>
        <button>Next</button>
      </Link>
      </>
    );
  }
}

export default Understanding;
