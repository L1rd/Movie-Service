import React, { FC } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import backgroundTrendingSection from 'assets/img/trandingSectionBackground.svg';
import { FilmSection, MovieCard } from 'components/shared';
import { Banner } from './Banner';
import { LatestMovies } from './LatestMovies';
import { Leaderboard } from './Leaderboard';

export const Main: FC = () => (
	<Container maxWidth={false} sx={{ maxWidth: '1300px', marginTop: '64px' }}>
		<Box
			sx={{
				padding: '88px 40px',
				background: 'linear-gradient(90deg, rgba(3, 37, 65, 0.8) 0%, rgba(3, 37, 65, 0) 100%)',
			}}
		>
			<Typography variant="h1">Welcome</Typography>
			<Typography variant="h2" sx={{ marginBottom: '50px' }}>
				Millions of movies, TV shows and people to discover. Explore now.
			</Typography>
			<TextField
				id="standard-name"
				sx={{ width: '100%' }}
				label="Search for a movie, tv show, person......"
				InputProps={{ endAdornment: <Button variant="gradient">Search</Button> }}
			/>
		</Box>
		<FilmSection title="What`s Popular" toggleButtonLeftLabel="On TV" toggleButtonRightLabel="In Theaters">
			<MovieCard title="Wednesday" date="Nov 23, 2022" score={85} img="/" />
			<MovieCard title="Wednesday" date="Nov 23, 2022" score={85} img="/" />
			<MovieCard title="Wednesday" date="Nov 23, 2022" score={85} img="/" />
			<MovieCard title="Wednesday" date="Nov 23, 2022" score={85} img="/" />
			<MovieCard title="Wednesday" date="Nov 23, 2022" score={85} img="/" />
		</FilmSection>
		<LatestMovies />
		<FilmSection
			styles={{
				background: `url(${backgroundTrendingSection}) 50% 170px no-repeat`,
			}}
			title="Trending"
			toggleButtonLeftLabel="Today"
			toggleButtonRightLabel="This Week"
		>
			<MovieCard title="Wednesday" date="Nov 23, 2022" score={85} img="/" />
			<MovieCard title="Wednesday" date="Nov 23, 2022" score={85} img="/" />
			<MovieCard title="Wednesday" date="Nov 23, 2022" score={85} img="/" />
			<MovieCard title="Wednesday" date="Nov 23, 2022" score={85} img="/" />
			<MovieCard title="Wednesday" date="Nov 23, 2022" score={85} img="/" />
		</FilmSection>
		<Banner />
		<Leaderboard />
	</Container>
);
