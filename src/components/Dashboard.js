import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class Dashboard extends React.Component {
	componentDidMount() {
		this.props.fetchUsers();
	}
	render() {
		return <h1>Dashboard</h1>;
	}
}

export default connect(null, { fetchUsers })(Dashboard);
