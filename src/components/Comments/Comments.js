import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

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
    this.props.dispatch({type:'REVIEW', payload:{comments: this.state.comment}})
  }

  render() {
    return (
      <>
      <h2>Any comments you want to leave?</h2>
      <label>Comments?</label>
      <input type="text" value={this.state.number} onChange={this.handleChange}/>
      <Link to='/review'>
        <button onClick={this.handleClick}>Next</button>
      </Link>
      </>
    );
  }
}

export default connect()(Comments);
