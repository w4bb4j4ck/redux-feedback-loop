import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Review extends Component {
  render() {
    return (
      <>
      <h2>Review Your Feedback</h2>
      <ul>
          <li>Feelings: </li>
          <li>Understanding: </li>
          <li>Support: </li>
          <li>Comments: </li>
      </ul>
      <Link to='/success'>
        <button>Submit</button>
      </Link>
      </>
    );
  }
}

export default Review;
