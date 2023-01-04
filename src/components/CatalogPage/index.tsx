import { FC } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { MovieCard } from 'components/shared';
import { MovieAccordion } from './Accordion';

interface CatalogPageProps {
	title: string;
}

export const CatalogPage: FC<CatalogPageProps> = ({ title }) => (
	<Container maxWidth={false} sx={{ maxWidth: '1300px', marginTop: '64px' }}>
		<Box sx={{ padding: '30px 0 0 0' }}>
			<Typography variant="h3" sx={{ marginBottom: '20px', lineHeight: '32px' }}>
				{title}
			</Typography>
			<Box sx={{ display: 'flex' }}>
				<MovieAccordion />
				<Box
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						height: '100%',
					}}
				>
					<MovieCard
						title="Wednesday"
						date="Nov 23, 2022"
						score={85}
						img="/"
						sx={{
							boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1) !important',
							margin: '0 28px 30px 0',
						}}
					/>
					<MovieCard
						title="Wednesday"
						date="Nov 23, 2022"
						score={85}
						img="/"
						sx={{ boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1) !important', margin: '0 28px 30px 0' }}
					/>
					<MovieCard
						title="Wednesday"
						date="Nov 23, 2022"
						score={85}
						img="/"
						sx={{ boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1) !important', margin: '0 28px 30px 0' }}
					/>
					<MovieCard
						title="Wednesday"
						date="Nov 23, 2022"
						score={85}
						img="/"
						sx={{ boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1) !important', margin: '0 28px 30px 0' }}
					/>
					<MovieCard
						title="Wednesday"
						date="Nov 23, 2022"
						score={85}
						img="/"
						sx={{ boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1) !important', margin: '0 28px 30px 0' }}
					/>
					<MovieCard
						title="Wednesday"
						date="Nov 23, 2022"
						score={85}
						img="/"
						sx={{ boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1) !important', margin: '0 28px 30px 0' }}
					/>
				</Box>
			</Box>
		</Box>
	</Container>
);
