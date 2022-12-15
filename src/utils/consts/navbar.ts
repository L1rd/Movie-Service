import { INavbar } from 'utils/types';

export const NAVBAR: INavbar[] = [
	{
		label: 'Movies',
		pages: [
			{ title: 'Popular', path: '/' },
			{ title: 'Now playing', path: '/' },
			{ title: 'Upcoming', path: '/' },
			{ title: 'Top rated', path: '/' },
		],
	},
	{
		label: 'TV Shows',
		pages: [
			{ title: 'Popular', path: '/' },
			{ title: 'Airing Today', path: '/' },
			{ title: 'On Tv', path: '/' },
			{ title: 'Top rated', path: '/' },
		],
	},
	{ label: 'People', pages: [{ title: 'Popular People', path: '/' }] },
	{
		label: 'More',
		pages: [
			{ title: 'Discussions', path: '/' },
			{ title: 'Leaderboard', path: '/' },
			{ title: 'Support', path: '/' },
			{ title: 'API', path: '/' },
		],
	},
];
