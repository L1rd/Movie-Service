import { createTheme } from '@mui/material';

const palette = createTheme({
	palette: {
		white: '#FFFFFF',
		black: '#000000',
		darkBlue: '#032541',
		lightBlue: '#01B4E4',
		lightGrey: '#d3d3d3',
		turquoise: '#1ED5A9',
		purple: '#805BE7',
		purpleGradient: 'radial-gradient(50% 50% at 50% 50%, #031D33 0%, #032541 70%)',
	},
});

export const theme = createTheme(palette, {
	typography: {
		h1: {
			fontFamily: 'inherit',
			fontWeight: '700',
			fontSize: '48px',
			lineHeight: '48px',
			color: `${palette.palette.white}`,
		},
		h2: {
			fontFamily: 'inherit',
			fontWeight: '600',
			fontSize: '32px',
			lineHeight: '40px',
			color: `${palette.palette.white}`,
		},
		h3: {
			fontFamily: 'inherit',
			fontWeight: '600',
			fontSize: '24px',
			lineHeight: '30px',
			color: `${palette.palette.black}`,
		},
		h4: {
			fontFamily: 'inherit',
			fontWeight: '700',
			fontSize: '16px',
			lineHeight: '20px',
			color: `${palette.palette.black}`,
		},
		h5: {
			fontFamily: 'inherit',
			fontWeight: '600',
			fontSize: '19.2px',
			lineHeight: '24px',
			color: `${palette.palette.white}`,
		},
		h6: {
			fontFamily: 'inherit',
			fontWeight: '300',
			fontSize: '16px',
			lineHeight: '20px',
			color: `${palette.palette.black}`,
		},
		body1: {
			fontFamily: 'inherit',
			fontWeight: '400',
			fontSize: '16px',
			lineHeight: '20px',
			color: `${palette.palette.black}`,
		},
		body2: {
			fontFamily: 'inherit',
			fontWeight: '400',
			fontSize: '19.2px',
			lineHeight: '24px',
			color: `${palette.palette.white}`,
		},
	},
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					'& .MuiToolbar-root': {
						padding: '0px !important',
					},
					zIndex: 1500,
					boxShadow: 'inherit',
					backgroundColor: `${palette.palette.darkBlue} !important`,
				},
			},
		},
		MuiAccordion: {
			styleOverrides: {
				root: {
					'&::before': {
						content: 'none',
					},
					boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
					borderRadius: '8px',
					'&.Mui-expanded .MuiAccordionSummary-root': {
						borderBottom: '1px solid #EEEEEE',
					},
				},
			},
		},
		MuiLinearProgress: {
			styleOverrides: {
				root: {
					backgroundColor: 'inherit',
					borderRadius: '4px',
					height: '8px',
				},
			},
		},
		MuiList: {
			styleOverrides: {
				root: {
					'& svg': {
						marginRight: '10px',
						fontSize: '20px',
					},
				},
			},
		},
		MuiToggleButtonGroup: {
			styleOverrides: {
				root: {
					border: `1px solid ${palette.palette.darkBlue}`,
					borderRadius: '30px',
					height: '30px',
					transition: '0.5s',
					'.Mui-selected': {
						backgroundColor: `${palette.palette.darkBlue} !important`,
						borderRadius: '30px',
						'& p': {
							color: `${palette.palette.lightBlue} !important`,
						},
					},
				},
			},
		},
		MuiToggleButton: {
			styleOverrides: {
				root: {
					border: 'none',
					textTransform: 'inherit',
					color: `${palette.palette.darkBlue}`,
					'& p': {
						fontFamily: 'inherit',
						fontWeight: '600',
						fontSize: '16px',
						lineHeight: '20px',
						color: `${palette.palette.darkBlue}`,
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
						borderBottom: `1px solid ${palette.palette.darkBlue}`,
						padding: '6px 24px',
						minWidth: '0',
						transition: '0.3s',
						'&:hover': {
							borderColor: `${palette.palette.white}`,
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
						color: `${palette.palette.white}`,
						background: 'linear-gradient(90deg, #1ED5A9 0%, #01B4E4 100%)',
						borderRadius: '30px',
						transition: '0.3s',
						border: `1px solid ${palette.palette.lightBlue}`,
						'&:hover': {
							background: 'inherit',
							color: `${palette.palette.lightBlue}`,
							borderColor: `${palette.palette.lightBlue}`,
						},
					},
				},
				{
					props: { variant: 'bannerButton' },
					style: {
						fontFamily: 'inherit',
						textTransform: 'inherit',
						fontWeight: '600',
						fontSize: '17.28px',
						lineHeight: '22px',
						padding: '10px 18px',
						color: `${palette.palette.white}`,
						background: `${palette.palette.purple}`,
						borderRadius: '5px',
						transition: '0.3s',
						border: `2px solid ${palette.palette.purple}`,
						'&:hover': {
							background: `${palette.palette.white}`,
							color: `${palette.palette.purple}`,
							borderColor: `${palette.palette.purple}`,
						},
					},
				},
				{
					props: { variant: 'footerButton' },
					style: {
						fontFamily: 'inherit',
						fontWeight: '700',
						fontSize: '18.72px',
						lineHeight: '24px',
						padding: '10px 18px',
						color: `${palette.palette.lightBlue}`,
						background: `${palette.palette.white}`,
						borderRadius: '5px',
						transition: '0.3s',
						border: `2px solid ${palette.palette.white}`,
						'&:hover': {
							background: 'inherit',
							color: `${palette.palette.white}`,
							borderColor: `${palette.palette.white}`,
						},
					},
				},
				{
					props: { variant: 'catalogButton' },
					style: {
						fontFamily: 'inherit',
						textTransform: 'inherit',
						fontWeight: '600',
						fontSize: '19.2px',
						lineHeight: '19px',
						padding: '10px 100px',
						color: `rgba(0, 0, 0, 0.5)`,
						border: `2px solid ${palette.palette.white}`,
						background: `rgba(228, 228, 228, 0.7)`,
						borderRadius: '20px',
						transition: '0.3s',
						'&:hover': {
							background: `${palette.palette.white}`,
							borderColor: `${palette.palette.lightGrey}`,
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
						color: `${palette.palette.lightGrey}`,
						left: '5px',
						top: '3px',
					},
					'& label.Mui-focused': {
						fontSize: '17.6px',
						top: '-10px',
						color: `${palette.palette.white}`,
					},
					'& .MuiInputBase-root': {
						paddingRight: '0',
					},
					'& .MuiOutlinedInput-root': {
						borderRadius: '50px',
						backgroundColor: `${palette.palette.white}`,

						'& fieldset': {
							borderColor: `${palette.palette.lightGrey}`,
							transition: '0.4s',
						},
						'&:hover fieldset': {
							border: 'none',
							boxShadow: `${palette.palette.lightGrey} 0px 8px 24px`,
						},
						'&.Mui-focused fieldset': {
							border: 'none',
							boxShadow: `${palette.palette.lightGrey} 0px 8px 24px`,
						},
					},
				},
			},
		},
	},
});
