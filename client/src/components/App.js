//if exporting either functional or class based component
// will write the file with a capital letter
//front end gives us access to webpack and babel
// so we can use import instead of require
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//connect gives certain components the ability
// to call action creators
import { connect } from 'react-redux';
import * as actions from '../actions/';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';


//functional component that returns a little bit of JSX
// exact = {true} and exact are the same cuz of JSX
class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<BrowserRouter>
				<div className="container">
					<Header />
					<Route exact path="/" component={Landing} />
					<Route exact path="/surveys" component={Dashboard} />
					<Route path="/surveys/new" component={SurveyNew} />
				</div>
			</BrowserRouter>
		);
	}
};

//first argument is reserved for map
// state to props argument
// all actions are passed to App as props
// so can reference them by calling this.
export default connect(null, actions)(App);