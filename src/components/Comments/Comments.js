import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Comments extends Component {
  render() {
    return (
      <>
      <h2>Any comments you want to leave?</h2>
      <label>Comments?</label>
      <input type="text" />
      <Link to='/review'>
        <button>Next</button>
      </Link>
      </>
    );
  }
}

export default Comments;
