import { FC } from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';

interface ProgressProps {
	value: number;
	background: string;
}

export const LinearProgressWithLabel: FC<ProgressProps> = ({ value, background }) => (
	<Box sx={{ display: 'flex', alignItems: 'baseline' }}>
		<Box sx={{ width: '100%' }}>
			<LinearProgress
				variant="determinate"
				value={value}
				sx={{
					'& span': {
						borderRadius: '4px',
						background: `${background}`,
					},
				}}
			/>
		</Box>
		<Box sx={{ minWidth: 35 }}>
			<Typography variant="body1" sx={{ fontWeight: '700' }}>
				{value}
			</Typography>
		</Box>
	</Box>
);
