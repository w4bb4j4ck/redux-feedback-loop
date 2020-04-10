import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Understanding extends Component {

  state = {
    number: '',
  }

  handleChange = (event) => {
    this.setState({
      ...this.state, number: event.target.value
    })
  }

  handleClick = () => {
    this.props.dispatch({type:'REVIEW', payload:{understanding: this.state.number}})
  }

  render() {
    return (
      <>
      <h2>How well are you understanding the content?</h2>
      <label>Understanding?</label>
      <input type="number" value={this.state.number} onChange={this.handleChange}/>
      {this.state.number === ''
      ? <button disabled>Next</button>
      :<Link to='/support'>
        <button onClick={this.handleClick}>Next</button>
      </Link>}
      </>
    );
  }
}

export default connect()(Understanding);
