import { FC } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Card, CardContent, CardMedia, Typography, useTheme } from '@mui/material';
import { CustomIconButton } from 'components/shared';

interface MovieVideoCardProps {
	title: string;
	subTitle: string;
	video: string;
}

export const MovieVideoCard: FC<MovieVideoCardProps> = ({ title, subTitle, video }) => {
	const theme = useTheme();

	return (
		<Card
			sx={{
				minWidth: '300px',
				background: 'none',
				textAlign: 'center',
				position: 'relative',
				boxShadow: 'none',
				marginRight: '20px',
			}}
		>
			<CustomIconButton
				sx={{
					position: 'absolute',
					top: '8px',
					right: '8px',
					background: `${theme.palette.white}`,
					height: '24px',
					width: '24px',
					zIndex: '1',
					transition: '0.4s',
					'&:hover': {
						backgroundColor: `${theme.palette.lightBlue}`,
					},
				}}
			>
				<MoreHorizIcon />
			</CustomIconButton>
			<CardMedia
				component="img"
				height="168"
				sx={{
					position: 'relative',
					background: `${theme.palette.lightGrey}`,
					borderRadius: '8px',
				}}
				image={video}
				alt={title}
			/>
			<CardContent sx={{ padding: '10px' }}>
				<Typography gutterBottom variant="h5" component="div">
					{title}
				</Typography>
				<Typography variant="body1" sx={{ color: `${theme.palette.white}` }}>
					{subTitle}
				</Typography>
			</CardContent>
		</Card>
	);
};
