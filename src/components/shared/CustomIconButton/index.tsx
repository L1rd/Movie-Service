import { FC } from 'react';
import { IconButton, IconButtonProps } from '@mui/material';

export const CustomIconButton: FC<IconButtonProps> = ({ children, sx }) => <IconButton sx={sx}>{children}</IconButton>;
