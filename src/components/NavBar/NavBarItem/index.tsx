import { FC, useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { INavbar, INavbarItem } from 'utils/types';

export const NavBarItem: FC<{ item: INavbar }> = ({ item }) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleCloseMenu = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<Button key={item.label} variant="navItem" onClick={handleOpenMenu}>
				{item.label}
			</Button>
			<Menu
				open={!!anchorEl}
				onClose={handleCloseMenu}
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
					zIndex: 1600,
				}}
			>
				{item.options.map((item: INavbarItem) => (
					<MenuItem>{item.title}</MenuItem>
				))}
			</Menu>
		</>
	);
};
