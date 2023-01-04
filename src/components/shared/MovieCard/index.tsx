import { FC, MouseEvent, useState } from 'react';
import { Bookmark, Favorite, Grade, List, MoreHoriz } from '@mui/icons-material';
import { Card, CardContent, CardMedia, Menu, MenuItem, Typography, useTheme } from '@mui/material';
import { CircularProgressWithLabel, CustomIconButton } from 'components/shared';

interface MovieCardProps {
	title: string;
	date: string;
	score: number;
	img: string;
	sx?: object;
}

export const MovieCard: FC<MovieCardProps> = ({ title, date, score, img, sx }) => {
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
				width: '150px',
				position: 'relative',
				boxShadow: 'none',
				marginRight: '20px',
				transition: '0.5s',
				backgroundColor: 'inherit',
				borderRadius: '8px',
				filter: `${open ? 'blur(4px) brightness(50%)' : 'none'}`,
				...sx,
			}}
		>
			<CustomIconButton
				sx={{
					visibility: `${open ? 'hidden' : 'none'}`,
					position: 'absolute',
					top: '8px',
					right: '8px',
					background: `${theme.palette.white}`,
					height: '24px',
					width: '24px',
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
				height="225"
				sx={{ background: `${theme.palette.lightGrey}`, borderRadius: '8px' }}
				image={img}
				alt={title}
			/>
			<CircularProgressWithLabel value={score} sx={{ position: 'absolute', top: '205px', left: '10px' }} />
			<CardContent sx={{ padding: '26px 0 20px 10px' }}>
				<Typography
					gutterBottom
					variant="h4"
					sx={{
						'&:hover': { color: `${theme.palette.lightBlue}`, cursor: 'pointer' },
					}}
				>
					{title}
				</Typography>
				<Typography variant="body1">{date}</Typography>
			</CardContent>
		</Card>
	);
};
