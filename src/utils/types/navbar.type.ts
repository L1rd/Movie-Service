export type INavbar = {
	label: string;
	isOpen: boolean;
	options: INavbarItem[];
};

export type INavbarItem = {
	title: string;
	path: string;
};
