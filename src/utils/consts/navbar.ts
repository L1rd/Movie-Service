import { INavbar } from 'utils/types';

export const NAVBAR: INavbar[] = [
	{
		label: 'Movies',
		isOpen: false,
		options: [
			{ title: 'Popular', path: '/' },
			{ title: 'Now playing', path: '/' },
			{ title: 'Upcoming', path: '/' },
			{ title: 'Top rated', path: '/' },
		],
	},
	{
		label: 'TV Shows',
		isOpen: false,
		options: [
			{ title: 'Popular', path: '/' },
			{ title: 'Airing Today', path: '/' },
			{ title: 'On Tv', path: '/' },
			{ title: 'Top rated', path: '/' },
		],
	},
	{ label: 'People', isOpen: false, options: [{ title: 'Popular People', path: '/' }] },
	{
		label: 'More',
		isOpen: false,
		options: [
			{ title: 'Discussions', path: '/' },
			{ title: 'Leaderboard', path: '/' },
			{ title: 'Support', path: '/' },
			{ title: 'API', path: '/' },
		],
	},
];
