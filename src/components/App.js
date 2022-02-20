import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Form from './Form';

class App extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={Dashboard} />
				<Route exact path="/add" component={Form} />
				<Route exact path="/edit/:id" component={Form} />
			</Switch>
		);
	}
}

export default App;
