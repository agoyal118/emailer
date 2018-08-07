import 'materialize-css/dist/css/materialize.min.css'

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';
//test code
import axios from 'axios';
window.axios=axios;
//

const devtoolsExt = global.devToolsExtension && global.devToolsExtension();

    const store = createStore(reducers, {}, compose(
      applyMiddleware(reduxThunk),
      devtoolsExt || (f => f)
    ));

//create store will hold all your state
//state can only be changed by pure function aka a reducer
// so to create this connection, we will pass a reducer
//const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

//takes two arguments. the first argument
// is our root component
// and second is where we are trying to
// render the component to in our DOM

//create a component instance by using JSX tags
// Provider is what connects react and redux
// anytime a state is changed in the redux store
// provider will inform app and all other components
ReactDOM.render(
	<Provider store={store}><App /></Provider>,
	document.querySelector('#root')
);