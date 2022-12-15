import React, { FC } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { PopularMovies } from './PopularMovies';

export const Main: FC = () => (
	<Container maxWidth="lg">
		<Box
			sx={{
				padding: '88px 40px',
				background: 'linear-gradient(90deg, rgba(3, 37, 65, 0.8) 0%, rgba(3, 37, 65, 0) 100%)',
				marginBottom: '30px',
			}}
		>
			<Typography variant="h1" color="primary.light">
				Welcome
			</Typography>
			<Typography variant="h2" sx={{ marginBottom: '50px' }} color="primary.light">
				Millions of movies, TV shows and people to discover. Explore now.
			</Typography>
			<TextField
				id="standard-name"
				sx={{ width: '100%' }}
				label="Search for a movie, tv show, person......"
				InputProps={{ endAdornment: <Button variant="gradient">Search</Button> }}
			/>
		</Box>
		<PopularMovies />
	</Container>
);
