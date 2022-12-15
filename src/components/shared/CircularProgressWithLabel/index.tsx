import { FC } from 'react';
import { Box, CircularProgress, CircularProgressProps, Typography, useTheme } from '@mui/material';

interface CircularProgressWithLabelProps extends CircularProgressProps {
	value: number;
}

export const CircularProgressWithLabel: FC<CircularProgressWithLabelProps> = ({ value, sx }) => {
	const theme = useTheme();

	return (
		<Box sx={sx}>
			<CircularProgress
				variant="determinate"
				sx={{ background: `${theme.palette.black}`, borderRadius: '50px' }}
				value={value}
			/>
			<Box
				sx={{
					top: 0,
					left: 0,
					bottom: 0,
					right: 0,
					position: 'absolute',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Typography
					variant="caption"
					component="div"
					sx={{ color: `${theme.palette.white}`, fontWeight: 'bold' }}
				>
					{`${Math.round(value)}`}
					<sup>%</sup>
				</Typography>
			</Box>
		</Box>
	);
};
