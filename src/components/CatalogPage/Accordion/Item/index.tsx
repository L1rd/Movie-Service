import { FC, ReactNode } from 'react';
import { Box, Typography } from '@mui/material';

interface AccordionItemProps {
	title?: string;
	children: ReactNode;
}

export const AccordionItem: FC<AccordionItemProps> = ({ title, children }) => (
	<Box sx={{ borderBottom: '1px solid #EEEEEE', padding: '15px' }}>
		{title ? (
			<Typography sx={{ marginBottom: '10px' }} variant="h6">
				{title}
			</Typography>
		) : null}
		{children}
	</Box>
);
