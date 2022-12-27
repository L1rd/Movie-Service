import { FC } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { FLEX_CENTER } from 'utils/mui/style';
import { LeaderboardItem } from './Item';
import { CIRCLE } from './style';

export const Leaderboard: FC = () => (
	<Box>
		<Box sx={{ ...FLEX_CENTER, justifyContent: ' flex-start', marginBottom: '20px' }}>
			<Typography sx={{ marginRight: '20px' }} variant="h3">
				Leaderboard
			</Typography>
			<Box>
				<Typography
					variant="body1"
					sx={{
						'&::before': {
							...CIRCLE,
							background: 'linear-gradient(90deg, #C0FECF 0%, #1ED5A9 100%)',
						},
					}}
				>
					All Time Edits
				</Typography>
				<Typography
					variant="body1"
					sx={{
						'&::before': {
							...CIRCLE,
							background: 'linear-gradient(90deg, #FDC170 0%, #D93B63 100%)',
						},
					}}
				>
					Edits This Week
				</Typography>
			</Box>
		</Box>
		<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginLeft: '0 !important' }}>
			<LeaderboardItem name="Andrew" valueAllTime={70} valueThisWeek={30} />
			<LeaderboardItem name="Peter" valueAllTime={10} valueThisWeek={90} />
			<LeaderboardItem name="Carl" valueAllTime={35} valueThisWeek={45} />
			<LeaderboardItem name="Lee" valueAllTime={10} valueThisWeek={30} />
			<LeaderboardItem name="Kenny" valueAllTime={90} valueThisWeek={10} />
			<LeaderboardItem name="Duck" valueAllTime={19} valueThisWeek={5} />
		</Grid>
	</Box>
);
