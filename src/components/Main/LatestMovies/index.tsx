import { MouseEvent, useState } from 'react';
import { Box, ToggleButton, ToggleButtonGroup, Typography, useTheme } from '@mui/material';
import { MovieVideoCard } from 'components/MovieVideoCard';

export const LatestMovies = () => {
	const [alignment, setAlignment] = useState<string | null>('On TV');

	const theme = useTheme();

	const handleAlignment = (event: MouseEvent<HTMLElement>, newAlignment: string | null) => {
		setAlignment(newAlignment);
	};

	return (
		<Box sx={{ background: 'grey', padding: '30px 0 0 40px' }}>
			<Box sx={{ display: 'flex', alignItems: 'center' }}>
				<Typography variant="h3" sx={{ marginRight: '20px', color: `${theme.palette.white}` }}>
					Latest Trailers
				</Typography>
				<ToggleButtonGroup
					exclusive
					aria-label="text alignment"
					value={alignment}
					sx={{
						border: `1px solid ${theme.palette.turquoise}`,
						transition: '0.5s',
						'.Mui-selected': { background: 'linear-gradient(90deg, #C0FECF 0%, #1ED5A9 100%)' },
					}}
					onChange={handleAlignment}
				>
					<ToggleButton value="On TV" aria-label="On TV">
						<Typography sx={{ color: `${theme.palette.white} !important` }}>On TV</Typography>
					</ToggleButton>
					<ToggleButton value="In Theateres" aria-label="In Theateres">
						<Typography sx={{ color: `${theme.palette.white} !important` }}>In Theaters</Typography>
					</ToggleButton>
				</ToggleButtonGroup>
			</Box>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					width: '100%',
					overflowX: 'scroll',
					'&::-webkit-scrollbar': {
						height: '0.5em',
					},
					'&::-webkit-scrollbar-thumb': {
						borderRadius: '5px',
						backgroundColor: `${theme.palette.lightGrey}`,
					},
					padding: '20px 0 20px 0',
				}}
			>
				<MovieVideoCard title="Adaptation" subTitle="Official Trailer" video="/" />
				<MovieVideoCard title="Adaptation" subTitle="Official Trailer" video="/" />
				<MovieVideoCard title="Adaptation" subTitle="Official Trailer" video="/" />
				<MovieVideoCard title="Adaptation" subTitle="Official Trailer" video="/" />
			</Box>
		</Box>
	);
};
