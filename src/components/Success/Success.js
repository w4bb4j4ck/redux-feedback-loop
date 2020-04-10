import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Success extends Component {
  render() {
    return (
      <>
      <h2>Thank you!</h2>
      <Link to='/'>
        <button>Take another survey</button>
      </Link>
      </>
    );
  }
}

export default Success;
