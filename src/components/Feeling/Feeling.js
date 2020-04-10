import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Feeling extends Component {

  state = {
    number: '',
  }

  handleChange = (event) => {
    this.setState({
      ...this.state, number: event.target.value
    })
  }

  handleClick = () => {
    this.props.dispatch({type:'REVIEW', payload:{feeling: this.state.number}})
  }

  render() {
    return (
      <>
      <h2>How are you feeling today?</h2>
      <label>Feeling?</label>
      <input type="number" value={this.state.number} onChange={this.handleChange}/>
      {this.state.number === ''
      ? <button disabled>Next</button>
      :<Link to='/understanding'>
        <button onClick={this.handleClick}>Next</button>
      </Link>}
      </>
    );
  }
}

export default connect()(Feeling);
