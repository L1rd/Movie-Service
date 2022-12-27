import { FC } from 'react';
import { Box, Button, Typography } from '@mui/material';
import bannerBackground from 'assets/img/bannerBackground.jpg';

export const Banner: FC = () => (
	<Box
		sx={{
			background: `url(${bannerBackground}) center/cover no-repeat`,
			padding: '30px 40px',
			marginBottom: '20px',
		}}
	>
		<Typography sx={{ marginBottom: '20px', fontWeight: '700' }} variant="h2">
			Join Today
		</Typography>
		<Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center' }}>
			<Box sx={{ width: '65%', marginRight: '60px' }}>
				<Typography
					variant="body2"
					sx={{
						span: {
							fontStyle: 'italic',
							color: 'rgba(255, 255, 255, 0.7)',
						},
						marginBottom: '22px',
					}}
				>
					Get access to maintain your own <span> custom personal lists, track what you`ve seen </span> and
					search and filter for <span> what to watch next</span>—regardless if it`s in theatres, on TV or
					available on popular streaming services like Netflix, Amazon Prime Video, Disney Plus, and Apple TV
					Plus.
				</Typography>
				<Button variant="bannerButton">Sign up</Button>
			</Box>
			<Box>
				<ul
					style={{
						fontWeight: '400',
						fontSize: '16px',
						lineHeight: '20px',
						color: 'rgba(255, 255, 255, 0.8)',
					}}
				>
					<li>Enjoy TMDB ad free</li>
					<li>Maintain a personal watchlist</li>
					<li>Filter by your subscribed streaming services and find something to watch</li>
					<li>Log the movies and TV shows you`ve seen</li>
					<li>Build custom lists</li>
					<li>Contribute to and improve our database</li>
				</ul>
			</Box>
		</Box>
	</Box>
);
