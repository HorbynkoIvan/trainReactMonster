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

function playlist(state = []) {
    return state
}

const store = createStore(playlist);
console.log(store.getState());

store.subscribe(() => {
    console.log(store.getState())
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
