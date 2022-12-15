import * as React from 'react';
import { FC } from 'react';
import { Add, Language, Search } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, Container, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import logo from 'assets/img/logo.svg';
import { NavBar } from 'components';
import { CustomIconButton } from 'components/shared';
import { NAVBAR } from 'utils/consts';

export const Header: FC = () => (
	<AppBar position="static">
		<Container maxWidth="xl">
			<Toolbar>
				<Typography sx={{ display: { xs: 'none', md: 'flex' } }}>
					<img src={logo} alt="logo" style={{ height: '20px', marginRight: '8px' }} />
				</Typography>

				<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
					<CustomIconButton size="large" color="inherit">
						<MenuIcon />
					</CustomIconButton>
					<Menu
						id="menu-appbar"
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
						open={false}
					>
						{NAVBAR.map(item => (
							<MenuItem key={item.label}>
								<Typography textAlign="center">{item.label}</Typography>
							</MenuItem>
						))}
					</Menu>
				</Box>
				<Typography sx={{ display: { xs: 'flex', md: 'none' } }}>
					<img src={logo} alt="logo" style={{ height: '20px', marginRight: '8px' }} />
				</Typography>
				<NavBar />
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<CustomIconButton sx={{ marginRight: '22px', color: 'white' }}>
						<Add />
					</CustomIconButton>
					<CustomIconButton sx={{ marginRight: '14px', color: 'white' }}>
						<Language />
					</CustomIconButton>
					<Button variant="navItem">Login</Button>
					<Button variant="navItem">Join TMDB</Button>
					<CustomIconButton sx={{ color: '#01B4E4', marginLeft: '2px' }}>
						<Search />
					</CustomIconButton>
				</Box>
			</Toolbar>
		</Container>
	</AppBar>
);
