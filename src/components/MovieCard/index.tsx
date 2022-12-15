import { FC } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { CircularProgressWithLabel, CustomIconButton } from 'components/shared';

interface MovieCardProps {
	title: string;
	date: string;
	score: number;
	img: string;
}

export const MovieCard: FC<MovieCardProps> = ({ title, date, score, img }) => (
	<Card sx={{ minWidth: '150px', position: 'relative', boxShadow: 'none', marginRight: '20px' }}>
		<CustomIconButton
			sx={{ position: 'absolute', top: '8px', right: '8px', background: 'white', height: '24px', width: '24px' }}
		>
			<MoreHorizIcon />
		</CustomIconButton>
		<CardMedia
			component="img"
			height="225"
			sx={{ background: 'lightgrey', borderRadius: '8px' }}
			image={img}
			alt={title}
		/>
		<CircularProgressWithLabel value={score} sx={{ position: 'absolute', bottom: '75px', left: '10px' }} />
		<CardContent sx={{ padding: '26px 0 20px 10px' }}>
			<Typography gutterBottom variant="h4" component="div" color="primary.main">
				{title}
			</Typography>
			<Typography variant="body1">{date}</Typography>
		</CardContent>
	</Card>
);
