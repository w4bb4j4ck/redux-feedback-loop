import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Understanding from '../Understanding/Understanding';
import Feeling from '../Feeling/Feeling';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <main>
          <Router>
            <Route exact path='/' component={Feeling}/>
            <Route path='/understanding' component={Understanding}/>
            <Route path='/support' component={Support}/>
            <Route path='/comments' component={Comments}/>
            <Route path='/review' component={Review}/>
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
