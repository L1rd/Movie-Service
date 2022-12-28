import { FC } from 'react';
import { Grid } from '@mui/material';
import { User } from 'components/shared/User';

interface LeaderboardItemProps {
	name: string;
	valueAllTime: number;
	valueThisWeek: number;
}

export const LeaderboardItem: FC<LeaderboardItemProps> = ({ name, valueAllTime, valueThisWeek }) => (
	<Grid xs={6} sx={{ marginBottom: '20px' }}>
		<User name={name} valueAllTime={valueAllTime} valueThisWeek={valueThisWeek} />
	</Grid>
);
