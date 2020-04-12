import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Understanding from '../Understanding/Understanding';
import Feeling from '../Feeling/Feeling';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Success from '../Success/Success';
import Header from '../Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Router>
            <Route exact path='/' component={Feeling}/>
            <Route path='/understanding' component={Understanding}/>
            <Route path='/support' component={Support}/>
            <Route path='/comments' component={Comments}/>
            <Route path='/review' component={Review}/>
            <Route path='/success' component={Success}/>
          </Router>
        </main>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxStore) => ({
  review: reduxStore.review
})

export default connect(putReduxStateOnProps)(App);
