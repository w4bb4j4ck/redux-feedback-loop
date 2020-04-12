import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <header className="App-header">
        <h5>Liliana's Black Magic Immersion Program</h5>
        <h2 className="App-title">Feedback</h2>
        <h4><i>Smartass comment</i></h4>
        </header>
    );
  }
}

const putReduxStateOnProps = (reduxStore) => ({
  review: reduxStore.review
})

export default Header;
