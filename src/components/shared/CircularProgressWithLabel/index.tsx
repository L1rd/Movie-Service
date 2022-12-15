import { FC } from 'react';
import { Box, CircularProgress, CircularProgressProps, Typography } from '@mui/material';

interface CircularProgressWithLabelProps extends CircularProgressProps {
	value: number;
}

export const CircularProgressWithLabel: FC<CircularProgressWithLabelProps> = ({ value, sx }) => (
	<Box sx={sx}>
		<CircularProgress variant="determinate" sx={{ background: 'black', borderRadius: '50px' }} value={value} />
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
			<Typography variant="caption" component="div" sx={{ color: 'white', fontWeight: 'bold' }}>
				{`${Math.round(value)}`}
				<sup>%</sup>
			</Typography>
		</Box>
	</Box>
);
