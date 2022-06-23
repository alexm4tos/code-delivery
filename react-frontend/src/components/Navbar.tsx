import { FunctionComponent } from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { MdDriveEta } from 'react-icons/md';

export const Navbar: FunctionComponent = () => {
	return (
		<AppBar position='static'>
			<Toolbar>
				<IconButton edge='start' color='inherit' aria-label='menu'>
					<MdDriveEta />
				</IconButton>
				<Typography variant='h6'>Code Delivery</Typography>
			</Toolbar>
		</AppBar>
	);
};
