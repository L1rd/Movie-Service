import { FC } from 'react';
import { Box, Button, Menu, MenuItem } from '@mui/material';
import { NAVBAR } from 'utils/consts';
import { INavbar } from 'utils/types';

export const NavBar: FC = () => (
	<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
		{NAVBAR.map((item: INavbar) => (
			<>
				<Button key={item.label} variant="navItem">
					{item.label}
				</Button>
				<Menu
					id="basic-menu"
					open={false}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left',
					}}
					keepMounted
					transformOrigin={{
						vertical: 'top',
						horizontal: 'left',
					}}
					sx={{
						display: 'block',
						height: '300px',
					}}
				>
					{item.pages.map(page => (
						<MenuItem>{page.title}</MenuItem>
					))}
				</Menu>
			</>
		))}
	</Box>
);
