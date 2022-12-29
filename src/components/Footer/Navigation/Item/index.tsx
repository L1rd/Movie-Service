import { FC } from 'react';
import { theme } from 'utils/theme';
import { IFooterNavItem } from 'utils/types';

type FooterNavigationItemProps = { item: IFooterNavItem };

export const FooterNavigationItem: FC<FooterNavigationItemProps> = ({ item }) => (
	<li
		style={{
			fontFamily: 'inherit',
			fontWeight: '400',
			fontSize: '17px',
			lineHeight: '24px',
			color: `${theme.palette.white}`,
		}}
	>
		<a href={item.path}>{item.title}</a>
	</li>
);
