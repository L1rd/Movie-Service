import { FC } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import footerLogo from 'assets/img/footer-logo.svg';
import { FOOTER_NAV } from 'utils/consts';
import { FLEX_CENTER } from 'utils/mui/style';
import { theme } from 'utils/theme';
import { IFooterNav } from 'utils/types';
import { FooterNavigation } from './Navigation';

export const Footer: FC = () => (
	<Box sx={{ background: `${theme.palette.purpleGradient}`, padding: '45px 0 80px 0' }}>
		<Container
			maxWidth="md"
			sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'baseline', flexWrap: 'wrap' }}
		>
			<Box sx={{ ...FLEX_CENTER, flexDirection: 'column', alignItems: 'flex-end' }}>
				<img src={footerLogo} alt="footer-logo" style={{ height: '94px', marginBottom: '46px' }} />
				<Button variant="footerButton">Join the Community</Button>
			</Box>
			{FOOTER_NAV.map((item: IFooterNav) => (
				<Box>
					<Typography variant="h1" sx={{ fontSize: '20px', lineHeight: '28px', textTransform: 'uppercase' }}>
						{item.label}
					</Typography>
					<FooterNavigation item={item} />
				</Box>
			))}
		</Container>
	</Box>
);
