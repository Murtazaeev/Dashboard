import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

const styles = makeStyles({
	table: {
		minWidth: 650
	}
});

class Dashboard extends React.Component {
	componentDidMount() {
		this.props.fetchUsers();
	}
	render() {
		const { classes } = this.props;
		console.log(this.props.users);
		return (
			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Id</TableCell>
							<TableCell align="right">Name</TableCell>
							<TableCell align="right">Username</TableCell>
							<TableCell align="right">Email</TableCell>
							<TableCell align="right">City</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{this.props.users.map((user) => (
							<TableRow key={user.name}>
								<TableCell component="th" scope="row">
									{user.id}
								</TableCell>
								<TableCell align="right">{user.name}</TableCell>
								<TableCell align="right">{user.username}</TableCell>
								<TableCell align="right">{user.email}</TableCell>
								<TableCell align="right">{user.address.city}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		);
	}
}

const mapStateToProps = (state) => {
	return { users: state.users };
};

const styleWrapperDashboard = withStyles(styles, { withTheme: true })(Dashboard);
export default connect(mapStateToProps, { fetchUsers })(styleWrapperDashboard);
