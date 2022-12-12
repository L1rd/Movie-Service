import { createTheme } from '@mui/material';

export const theme = createTheme({
	palette: {
		primary: {
			light: '#FFFFFF',
			main: '#000000',
		},
		secondary: {
			main: '#032541',
		},
	},
	typography: {
		h1: {
			fontFamily: 'inherit',
			fontWeight: '700',
			fontSize: '48px',
			lineHeight: '48px',
		},
		h2: {
			fontFamily: 'inherit',
			fontWeight: '600',
			fontSize: '32px',
			lineHeight: '40px',
		},
		h3: {
			fontFamily: 'inherit',
			fontWeight: '600',
			fontSize: '24px',
			lineHeight: '30px',
		},
		h4: {
			fontFamily: 'inherit',
			fontWeight: '700',
			fontSize: '16px',
			lineHeight: '20px',
		},
		body1: {
			fontFamily: 'inherit',
			fontWeight: '400',
			fontSize: '16px',
			lineHeight: '20px',
			color: 'rgba(0, 0, 0, 0.6)',
		},
	},
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: '#032541 !important',
				},
			},
		},
		MuiToggleButtonGroup: {
			styleOverrides: {
				root: {
					border: '1px solid #032541',
					borderRadius: '30px',
					height: '30px',
				},
			},
		},
		MuiToggleButton: {
			styleOverrides: {
				root: {
					border: 'none',
					textTransform: 'inherit',
					color: '#032541',
					'&:hover': {
						borderRadius: '10px',
					},
					'& p': {
						fontFamily: 'inherit',
						fontWeight: '600',
						fontSize: '16px',
						lineHeight: '20px',
						color: '#032541',
					},
					'&.Mui-selected': {
						backgroundColor: '#032541',
						borderRadius: '30px',
						'& p': {
							color: '#01B4E4',
						},
					},
				},
			},
		},
		MuiButton: {
			variants: [
				{
					props: { variant: 'navItem' },
					style: {
						fontFamily: 'inherit',
						fontWeight: '600',
						fontSize: '16px',
						lineHeight: '24px',
						textTransform: 'inherit',
						borderBottom: '1px solid #032541',
						padding: '6px 24px',
						minWidth: '0',
						transition: '0.3s',
						'&:hover': {
							borderColor: '#FFFF',
						},
					},
				},
				{
					props: { variant: 'gradient' },
					style: {
						fontFamily: 'inherit',
						textTransform: 'inherit',
						fontWeight: '700',
						fontSize: '16px',
						lineHeight: '20px',
						padding: '19px 26px',
						color: '#FFFFFF',
						background: 'linear-gradient(90deg, #1ED5A9 0%, #01B4E4 100%)',
						borderRadius: '30px',
						transition: '0.3s',
						border: '1px solid #01B4E4',
						'&:hover': {
							background: 'inherit',
							color: '#01B4E4',
							borderColor: '#01B4E4',
						},
					},
				},
			],
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					'& label': {
						fontSize: '17.6px',
						lineHeight: '22px',
						color: '#757575',
						left: '5px',
						top: '3px',
					},
					'& label.Mui-focused': {
						fontSize: '17.6px',
						top: '-10px',
						color: '#FFFF',
					},
					'& .MuiInputBase-root': {
						paddingRight: '0',
					},
					'& .MuiOutlinedInput-root': {
						borderRadius: '50px',
						backgroundColor: '#FFFFFF',

						'& fieldset': {
							borderColor: '#ffff',
							transition: '0.4s',
						},
						'&:hover fieldset': {
							border: 'none',
							boxShadow: '#ffff 0px 8px 24px',
						},
						'&.Mui-focused fieldset': {
							border: 'none',
							boxShadow: '#ffff 0px 8px 24px',
						},
					},
				},
			},
		},
	},
});
