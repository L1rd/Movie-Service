import { FC } from 'react';
import { IconButton, IconButtonProps } from '@mui/material';

interface CustomIconButtonProps extends IconButtonProps {
	icon: JSX.Element;
}
export const CustomIconButton: FC<CustomIconButtonProps> = ({ icon, ...props }) => {
	const { sx, onClick } = props;
	return (
		<IconButton sx={sx} onClick={onClick}>
			{icon}
		</IconButton>
	);
};
