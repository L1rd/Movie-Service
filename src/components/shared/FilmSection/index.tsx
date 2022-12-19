import React, { FC, MouseEvent, ReactNode, useState } from 'react';
import { Box, ToggleButton, ToggleButtonGroup, Typography, useTheme } from '@mui/material';

interface FilmSectionProps {
	title: string;
	children: ReactNode;
	toggleButtonLeftLabel: string;
	toggleButtonRightLabel: string;
	styles?: object;
}

export const FilmSection: FC<FilmSectionProps> = ({
	title,
	children,
	toggleButtonLeftLabel,
	toggleButtonRightLabel,
	styles,
}) => {
	const theme = useTheme();

	const [alignment, setAlignment] = useState<string | null>(`${toggleButtonLeftLabel}`);

	const handleAlignment = (event: MouseEvent<HTMLElement>, newAlignment: string | null) => {
		setAlignment(newAlignment);
	};

	return (
		<Box
			sx={{
				padding: '30px 0 0 40px',
				...styles,
			}}
		>
			<Box sx={{ display: 'flex', alignItems: 'center' }}>
				<Typography variant="h3" sx={{ marginRight: '20px' }}>
					{title}
				</Typography>
				<ToggleButtonGroup exclusive aria-label="text alignment" value={alignment} onChange={handleAlignment}>
					<ToggleButton value={toggleButtonLeftLabel} aria-label={toggleButtonLeftLabel}>
						<Typography>{toggleButtonLeftLabel}</Typography>
					</ToggleButton>
					<ToggleButton value={toggleButtonRightLabel} aria-label={toggleButtonRightLabel}>
						<Typography>{toggleButtonRightLabel}</Typography>
					</ToggleButton>
				</ToggleButtonGroup>
			</Box>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					width: '100%',
					'&::-webkit-scrollbar': {
						height: '0.5em',
					},
					'&::-webkit-scrollbar-thumb': {
						borderRadius: '5px',
						backgroundColor: `${theme.palette.lightGrey}`,
					},
					padding: '20px 0 20px 0',
					overflowX: 'scroll',
				}}
			>
				{children}
			</Box>
		</Box>
	);
};
