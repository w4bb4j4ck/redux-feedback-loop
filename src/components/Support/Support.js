import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Support extends Component {

  state = {
    number: '',
  }

  handleChange = (event) => {
    this.setState({
      ...this.state, number: event.target.value
    })
  }

  handleClick = () => {
    this.props.dispatch({type:'REVIEW', payload:{support: this.state.number}})
  }

  render() {
    return (
      <>
      <h2>How well are you being supported?</h2>
      <label>Support?</label>
      <input type="number" value={this.state.number} onChange={this.handleChange}/>
      {this.state.number === ''
      ? <button disabled>Next</button>
      :<Link to='/comments'>
        <button onClick={this.handleClick}>Next</button>
      </Link>}
      </>
    );
  }
}

export default connect()(Support);
