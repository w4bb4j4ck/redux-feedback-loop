import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

const review = (state=[], action) => {
    if(action.type === 'REVIEW'){
        return [...state, action.payload];
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        review
    })
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
