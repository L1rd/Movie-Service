import React, { FC } from 'react';
import { Box, ToggleButton, ToggleButtonGroup, Typography, useTheme } from '@mui/material';
import { MovieCard } from 'components';

export const PopularMovies: FC = () => {
	const theme = useTheme();

	const [alignment, setAlignment] = React.useState<string | null>('On TV');

	const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
		setAlignment(newAlignment);
	};

	return (
		<Box sx={{ padding: '30px 0 0 40px' }}>
			<Box sx={{ display: 'flex', alignItems: 'center' }}>
				<Typography variant="h3" sx={{ marginRight: '20px' }}>
					What`s Popular
				</Typography>
				<ToggleButtonGroup exclusive aria-label="text alignment" value={alignment} onChange={handleAlignment}>
					<ToggleButton value="On TV" aria-label="On TV">
						<Typography>On TV</Typography>
					</ToggleButton>
					<ToggleButton value="In Theateres" aria-label="In Theateres">
						<Typography>In Theaters</Typography>
					</ToggleButton>
				</ToggleButtonGroup>
			</Box>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					width: '100%',
					'&::-webkit-scrollbar': {
						height: '0.5em',
					},
					'&::-webkit-scrollbar-thumb': {
						borderRadius: '5px',
						backgroundColor: `${theme.palette.lightGrey}`,
					},
					padding: '20px 0 20px 0',
					overflowX: 'scroll',
				}}
			>
				<MovieCard title="Wednesday" date="Nov 23, 2022" score={85} img="/" />
				<MovieCard title="Wednesday" date="Nov 23, 2022" score={85} img="/" />
				<MovieCard title="Wednesday" date="Nov 23, 2022" score={85} img="/" />
				<MovieCard title="Wednesday" date="Nov 23, 2022" score={85} img="/" />
				<MovieCard title="Wednesday" date="Nov 23, 2022" score={85} img="/" />
			</Box>
		</Box>
	);
};
