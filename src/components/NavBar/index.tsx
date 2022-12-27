import { FC } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Menu, MenuItem, Typography, useTheme } from '@mui/material';
import { CustomIconButton } from 'components/shared';
import { NAVBAR } from 'utils/consts';
import { INavbar } from 'utils/types';
import { NavBarItem } from './NavBarItem';

export const NavBar: FC = () => {
	const theme = useTheme();

	return (
		<>
			<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
				<CustomIconButton size="large" sx={{ color: `${theme.palette.white}` }} icon={<MenuIcon />} />
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
						display: { xs: 'block', md: 'none' },
					}}
				>
					{NAVBAR.map((item: INavbar) => (
						<MenuItem key={item.label}>
							<Typography textAlign="center">{item.label}</Typography>
						</MenuItem>
					))}
				</Menu>
			</Box>
			<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
				{NAVBAR.map((item: INavbar) => (
					<NavBarItem item={item} />
				))}
			</Box>
		</>
	);
};
