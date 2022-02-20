import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import { Avatar, Dialog, DialogTitle, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';

import { connect } from 'react-redux';
import { deleteUser } from '../actions';

const styles = (theme) => ({
	avatarDelete: {
		backgroundColor: blue[100],
		color: blue[600]
	},
	avatarCancel: {
		backgroundColor: red[100],
		color: red[600]
	}
});

class DeleteDialog extends Component {
	handleDelete = () => {
		this.props.deleteUser(this.props.user.id);
		this.props.closeDialog();
	};

	render() {
		const { classes } = this.props;
		return (
			<Dialog
				open={this.props.isDialogOpen}
				aria-labelledby="delete-dialog-user"
				onClose={this.props.closeDialog}
			>
				<DialogTitle id="delete-dialog-title">{`Do you want to delete ${this.props.user?.name}`}</DialogTitle>
				<List>
					<ListItem button onClick={this.handleDelete}>
						<ListItemAvatar>
							<Avatar className={classes.avatarDelete}>
								<CheckIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Delete" />
					</ListItem>
					<ListItem button onClick={this.props.closeDialog}>
						<ListItemAvatar>
							<Avatar className={classes.avatarCancel}>
								<CloseIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Cancel" />
					</ListItem>
				</List>
			</Dialog>
		);
	}
}

export default connect(null, { deleteUser })(withStyles(styles)(DeleteDialog));
