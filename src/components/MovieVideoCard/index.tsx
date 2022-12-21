import { FC, MouseEvent, useState } from 'react';
import { Bookmark, Favorite, Grade, List, MoreHoriz } from '@mui/icons-material';
import { Card, CardContent, CardMedia, Menu, MenuItem, Typography, useTheme } from '@mui/material';
import { CustomIconButton } from 'components/shared';

interface MovieVideoCardProps {
	title: string;
	subTitle: string;
	video: string;
}

export const MovieVideoCard: FC<MovieVideoCardProps> = ({ title, subTitle, video }) => {
	const theme = useTheme();

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const open = Boolean(anchorEl);

	const handleOpen = (event: MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

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
				onClick={(event: MouseEvent<HTMLElement>) => handleOpen(event)}
				icon={<MoreHoriz />}
			/>
			<Menu
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				sx={{ top: '30px', left: '40px' }}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
			>
				<MenuItem onClick={handleClose}>
					<List /> Add to list
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<Favorite />
					Favorite
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<Bookmark />
					Watchlist
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<Grade />
					Your rating
				</MenuItem>
			</Menu>
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
				<Typography
					gutterBottom
					variant="h5"
					sx={{ '&:hover': { color: `${theme.palette.lightBlue}`, cursor: 'pointer' } }}
				>
					{title}
				</Typography>
				<Typography variant="body1" sx={{ color: `${theme.palette.white}` }}>
					{subTitle}
				</Typography>
			</CardContent>
		</Card>
	);
};
