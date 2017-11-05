import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
/*import {Provider} from 'react-redux';*/
import {createStore, applyMiddleware} from 'redux';
import {Router, Route, hashHistory} from 'react-router';

/*import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from '';*/

function playlist(state = [], action) {
    if (action.type === 'ADD_TRACK') {
        return [
            ...state,
            action.payload
        ]
    }
}

const store = createStore(playlist);

const list = document.querySelectorAll('.list')[0];
const trackInput = document.querySelectorAll('.trackInput')[0];
const addTrackBtn = document.querySelectorAll('.addTrack')[0];

store.subscribe(() => {
    console.log(store.getState());
    list.innerHTML = '';
    trackInput.value = '';
    store.getState().forEach((track) => {
        const li = document.createElement('li');
        li.textContent = track;
        list.appendChild(li);
    })
});

addTrackBtn.addEventListener('click', () => {
    const trackName = trackInput.value;
    console.log(trackName);
    store.dispatch({type: 'ADD_TRACK', payload: trackName})
});

/*const store=createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App} />
        </Router>
    </Provider>,
    document.getElementById('root')
);*/
ReactDOM.render(<App/>, document.getElementById('root'));

registerServiceWorker();
