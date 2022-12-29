import { FC } from 'react';
import { IFooterNav, IFooterNavItem } from 'utils/types';
import { FooterNavigationItem } from './Item';

type FooterNavigationProps = { item: IFooterNav };

export const FooterNavigation: FC<FooterNavigationProps> = ({ item }) => (
	<ul>
		{item.options.map((item: IFooterNavItem) => (
			<FooterNavigationItem item={item} />
		))}
	</ul>
);
