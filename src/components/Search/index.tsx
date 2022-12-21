import { ChangeEvent, FC, MouseEvent, useState } from 'react';
import { Clear, Search } from '@mui/icons-material';
import { Box, Container, InputAdornment, Popover, TextField } from '@mui/material';
import { CustomIconButton } from 'components/shared';
import { theme } from 'utils/theme';

export const SearchSection: FC<{ trigger: boolean }> = ({ trigger }) => {
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

	const [value, setSearchValue] = useState('');

	const handleSearchAction = (value: string) => {
		setSearchValue(value);
	};

	const handlePopoverAction = (value: HTMLButtonElement | null) => {
		setAnchorEl(value);
	};

	const open = Boolean(anchorEl);

	return (
		<>
			<CustomIconButton
				sx={{ color: `${theme.palette.lightBlue}`, marginLeft: '2px' }}
				onClick={(event: MouseEvent<HTMLButtonElement>) =>
					!anchorEl ? handlePopoverAction(event.currentTarget) : handlePopoverAction(null)
				}
				icon={!anchorEl ? <Search /> : <Clear />}
			/>
			<Popover
				anchorEl={anchorEl}
				open={open}
				sx={{ '& .MuiPopover-paper': { transition: '0.5s', top: trigger ? '0 !important' : 'inherit' } }}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
			>
				<Box
					sx={{
						width: '100vw',
						height: '50px',
						display: 'flex',
						alignItems: 'center',
					}}
				>
					<Container maxWidth="lg" sx={{}}>
						<TextField
							variant="standard"
							value={value}
							sx={{ width: '98%' }}
							placeholder="Search for a movie, tv show, person..."
							onChange={(e: ChangeEvent<HTMLInputElement>) => handleSearchAction(e.target.value)}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<Search />
									</InputAdornment>
								),
								endAdornment: (
									<InputAdornment
										position="end"
										style={{ visibility: `${value ? 'inherit' : 'hidden'}` }}
									>
										<CustomIconButton icon={<Clear />} onClick={() => handleSearchAction('')} />
									</InputAdornment>
								),
							}}
						/>
					</Container>
				</Box>
			</Popover>
		</>
	);
};
