import { IFooterNav } from 'utils/types';

export const FOOTER_NAV: IFooterNav[] = [
	{
		label: 'The Basics',
		options: [
			{ title: 'About TMDB', path: '/' },
			{ title: 'Contact Us', path: '/' },
			{ title: 'Support Forums', path: '/' },
			{ title: 'API', path: '/' },
			{ title: 'System Status', path: '/' },
		],
	},
	{
		label: 'Get Involved',
		options: [
			{ title: 'Contribution Bible', path: '/' },
			{ title: 'Add New Movie', path: '/' },
			{ title: 'Add New TV Show', path: '/' },
		],
	},
	{
		label: 'Community',
		options: [
			{ title: 'Guidelines', path: '/' },
			{ title: 'Discussions', path: '/' },
			{ title: 'Leaderboard', path: '/' },
			{ title: 'Twitter', path: '/' },
		],
	},
	{
		label: 'Legal',
		options: [
			{ title: 'Terms of Use', path: '/' },
			{ title: 'API Terms of Use', path: '/' },
			{ title: 'Privacy Policy', path: '/' },
		],
	},
];
