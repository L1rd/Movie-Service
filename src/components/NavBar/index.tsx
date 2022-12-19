import { FC, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, Menu, MenuItem, Typography, useTheme } from '@mui/material';
import { CustomIconButton } from 'components/shared';
import { NAVBAR } from 'utils/consts';
import { INavbar, INavbarItem } from 'utils/types';

export const NavBar: FC = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const theme = useTheme();

	const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleCloseMenu = () => {
		setAnchorEl(null);
	};

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
					<>
						<Button
							key={item.label}
							variant="navItem"
							onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleOpenMenu(e)}
						>
							{item.label}
						</Button>
						<Menu
							open={false}
							onClose={() => handleCloseMenu()}
							id="basic-menu"
							anchorEl={anchorEl}
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
							{item.options.map((item: INavbarItem) => (
								<MenuItem>{item.title}</MenuItem>
							))}
						</Menu>
					</>
				))}
			</Box>
		</>
	);
};
