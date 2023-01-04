import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Add, Language } from '@mui/icons-material';
import { AppBar, Box, Button, Container, Slide, Toolbar, Typography, useScrollTrigger, useTheme } from '@mui/material';
import logo from 'assets/img/logo.svg';
import { NavBar } from 'components';
import { SearchSection } from 'components/Search';
import { CustomIconButton } from 'components/shared';

export const Header: FC = () => {
	const theme = useTheme();

	const trigger = useScrollTrigger({
		target: window,
	});

	const navigate = useNavigate();

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			<AppBar>
				<Container maxWidth={false} sx={{ maxWidth: '1300px', position: 'relative' }}>
					<Toolbar>
						<Typography sx={{ display: { xs: 'none', md: 'flex' } }} onClick={() => navigate('/')}>
							<img
								src={logo}
								alt="logo"
								style={{ height: '20px', marginRight: '8px', cursor: 'pointer' }}
							/>
						</Typography>
						<NavBar />
						<Typography sx={{ display: { xs: 'flex', md: 'none' } }} onClick={() => navigate('/')}>
							<img
								src={logo}
								alt="logo"
								style={{ height: '20px', marginRight: '8px', cursor: 'pointer' }}
							/>
						</Typography>
						<Box sx={{ display: 'flex', alignItems: 'center' }}>
							<CustomIconButton
								sx={{ marginRight: '22px', color: `${theme.palette.white}` }}
								icon={<Add />}
							/>
							<CustomIconButton
								sx={{ marginRight: '14px', color: `${theme.palette.white}` }}
								icon={<Language />}
							/>
							<Button variant="navItem">Login</Button>
							<Button variant="navItem">Join TMDB</Button>
						</Box>
						<SearchSection trigger={trigger} />
					</Toolbar>
				</Container>
			</AppBar>
		</Slide>
	);
};
