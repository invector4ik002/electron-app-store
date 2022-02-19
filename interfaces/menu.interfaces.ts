// import { TopLevelCategory } from './page.interface';

import { TopLevelCategory } from "./page.interfaces";

// import { Interface } from "readline";

// export interface PageItem {
// 	alias: string;
// 	title: string;
// 	_id: string;
// 	category: string;
// }

// export interface MenuItem {
// 	_id: {
// 		secondCategory: string;
// 	};
// 	isOpened?: boolean;
// 	pages: PageItem[];
// }

// export interface FirstLevelMenuItem {
// 	route: string;
// 	name: string;
// 	icon: JSX.Element;
// 	id: TopLevelCategory;
// }

export interface PageItem {
	alias: string;
	title: string;
	_id: string;
	category: string;
}

export interface MenuItem {
	_id: { 
    secondCategory: string; 
  };
	isOpened?: boolean;
	pages: PageItem[];
}

export interface FirstLevelMenuItem {
	route: string;
	name: string;
	icon: JSX.Element,
	id: TopLevelCategory,
}