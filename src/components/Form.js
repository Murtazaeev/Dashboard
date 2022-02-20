import React, { Component } from 'react';
import { Button, Input, Paper, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { darken } from '@material-ui/core';

const styles = (theme) => ({
	submitButton: {
		background: theme.palette.success.main,
		color: 'white',
		'&:hover': {
			background: darken(theme.palette.success.main, 0.2)
		},
		marginLeft: '20px'
	},
	input: {
		display: 'block',
		margin: '30px'
	},
	form: {
		padding: '20px 60px',
		width: '70%',
		height: '60%',
		borderRadius: 'red 1'
	},
	formContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100vw',
		height: '70vh'
	},
	buttonContainer: {
		textAlign: 'right',
		marginRight: '28px'
	},
	title: {
		marginBottom: '60px'
	}
});

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = { name: '', email: '' };
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		console.log('Clicked');
		this.setState({ name: '', email: '' });
	};

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.formContainer}>
				<Paper className={classes.form}>
					<Typography className={classes.title} variant="h5">
						Form
					</Typography>
					<form onSubmit={this.handleSubmit}>
						<Input
							className={classes.input}
							type="text"
							required
							name="name"
							placeholder="name"
							value={this.state.username}
							onChange={this.handleChange}
						/>
						<Input
							className={classes.input}
							type="email"
							required
							name="email"
							placeholder="email"
							value={this.state.username}
							onChange={this.handleChange}
						/>
						<div className={classes.buttonContainer}>
							<Button variant="outlined" color="secondary">
								Cancel
							</Button>
							<Button type="submit" className={classes.submitButton} variant="contained" color="primary">
								Submit
							</Button>
						</div>
					</form>
				</Paper>
			</div>
		);
	}
}

export default withStyles(styles)(Form);
