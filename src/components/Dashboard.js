import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { darken } from '@material-ui/core';

import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import { Typography } from '@material-ui/core';

const styles = (theme) => ({
	table: {
		minWidth: 0
	},
	TableContainer: {
		padding: '40px 40px'
	},
	button: {
		width: 95
	},
	editButton: {
		background: theme.palette.warning.main,
		color: 'white',
		'&:hover': {
			background: darken(theme.palette.warning.main, 0.2)
		}
	},
	tableHeader: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: '30px 20px'
	},
	typography: {
		fontWeight: 750
	}
});

class Dashboard extends React.Component {
	componentDidMount() {
		this.props.fetchUsers();
	}

	getRows = () => {
		return (
			<TableRow>
				<TableCell>Id</TableCell>
				<TableCell align="right">Name</TableCell>
				<TableCell align="right">Username</TableCell>
				<TableCell align="right">Email</TableCell>
				<TableCell align="right">City</TableCell>
				<TableCell align="right">Edit</TableCell>
				<TableCell align="right">Delete</TableCell>
			</TableRow>
		);
	};

	render() {
		const { classes } = this.props;
		return (
			<div>
				<Typography className={classes.typography} variant="h3">
					Dashboard
				</Typography>
				<div className={classes.TableContainer}>
					<Paper className={classes.tableHeader}>
						<Typography className={classes.typography} variant="h4">
							User list
						</Typography>
						<Button variant="contained" color="primary" size="large">
							Add new
						</Button>
					</Paper>
					<TableContainer component={Paper}>
						<Table className={classes.table} aria-label="simple table">
							<TableHead>{this.getRows()}</TableHead>
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
										<TableCell align="right">
											{
												<Button
													className={classes.editButton}
													variant="contained"
													color="primary"
													startIcon={<EditIcon />}
												>
													edit
												</Button>
											}
										</TableCell>
										<TableCell align="right">
											{
												<Button
													className={classes.button}
													variant="contained"
													color="secondary"
													startIcon={<DeleteIcon />}
												>
													delete
												</Button>
											}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { users: state.users };
};

export default connect(mapStateToProps, { fetchUsers })(withStyles(styles)(Dashboard));
