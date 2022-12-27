import { FC } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { FLEX_CENTER } from 'utils/mui/style';
import { LinearProgressWithLabel } from '../LinearProgressWithLabel';

interface UserProps {
	name: string;
	valueAllTime: number;
	valueThisWeek: number;
}

export const User: FC<UserProps> = ({ name, valueAllTime, valueThisWeek }) => (
	<Box sx={{ ...FLEX_CENTER }}>
		<Avatar sx={{ marginRight: '10px' }}>{name[0]}</Avatar>
		<Box sx={{ width: '100%' }}>
			<Typography sx={{ marginBottom: '5px', fontSize: '19px' }} variant="h4">
				{name}
			</Typography>
			<LinearProgressWithLabel
				value={valueAllTime}
				background="linear-gradient(90deg, #C0FECF 0%, #1ED5A9 100%)"
			/>
			<LinearProgressWithLabel
				value={valueThisWeek}
				background="linear-gradient(90deg, #FDC170 0%, #D93B63 100%)"
			/>
		</Box>
	</Box>
);
