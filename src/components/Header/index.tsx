import { FC } from 'react';
import { Add, Language, Search } from '@mui/icons-material';
import { AppBar, Box, Button, Container, Slide, Toolbar, Typography, useScrollTrigger, useTheme } from '@mui/material';
import logo from 'assets/img/logo.svg';
import { NavBar } from 'components';
import { CustomIconButton } from 'components/shared';

export const Header: FC = () => {
	const theme = useTheme();

	const trigger = useScrollTrigger({
		target: window,
	});

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			<AppBar>
				<Container maxWidth="lg" sx={{ position: 'relative' }}>
					<Toolbar>
						<Typography sx={{ display: { xs: 'none', md: 'flex' } }}>
							<img src={logo} alt="logo" style={{ height: '20px', marginRight: '8px' }} />
						</Typography>
						<NavBar />
						<Typography sx={{ display: { xs: 'flex', md: 'none' } }}>
							<img src={logo} alt="logo" style={{ height: '20px', marginRight: '8px' }} />
						</Typography>
						<Box sx={{ display: 'flex', alignItems: 'center' }}>
							<CustomIconButton sx={{ marginRight: '22px', color: `${theme.palette.white}` }}>
								<Add />
							</CustomIconButton>
							<CustomIconButton sx={{ marginRight: '14px', color: `${theme.palette.white}` }}>
								<Language />
							</CustomIconButton>
							<Button variant="navItem">Login</Button>
							<Button variant="navItem">Join TMDB</Button>
							<CustomIconButton sx={{ color: `${theme.palette.lightBlue}`, marginLeft: '2px' }}>
								<Search />
							</CustomIconButton>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</Slide>
	);
};
