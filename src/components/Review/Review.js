import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Review extends Component {

  handleClick = () => {
    let obj = {
      feeling: this.props.review[0].feeling,
      understanding: this.props.review[1].understanding,
      support: this.props.review[2].support,
      comments: this.props.review[3].comments
    }

    axios.post('/feedback', obj)
    .then((response) => {
      console.log('Feedback saved', response);
      this.props.dispatch({type:'CLEAR'});
    }).catch((error) => {
      console.log('Error in POST.', error);
      alert('Error. Check console');
    })
  }

  render() {
    return (
      <>
      <h2>Review Your Feedback</h2>
      <ul>
          <li>Feelings: {this.props.review.feeling}</li>
          <li>Understanding: {this.props.review.understanding}</li>
          <li>Support: {this.props.review.support}</li>
          <li>Comments: {this.props.review.comments}</li>
      </ul>
      <Link to='/success'>
        <button onClick={this.handleClick}>Submit</button>
      </Link>
      <Link to='/comments'>
        <button>Back</button>
      </Link>
      </>
    );
  }
}

const putReduxStateOnProps = (reduxStore) => ({
  review: reduxStore.review
})

export default connect(putReduxStateOnProps)(Review);
