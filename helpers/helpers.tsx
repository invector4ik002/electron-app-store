import CoursesIcon from './icons/courses.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import ServicesIcon from './icons/services.svg';
import { FirstLevelMenuItem } from "../interfaces/menu.interfaces";
import { TopLevelCategory } from '../interfaces/page.interfaces';

export const firstLevelMenu: FirstLevelMenuItem[] = [
	{
		route: 'courses',
		name: 'Курсы',
		icon: <CoursesIcon />,
		id: TopLevelCategory.Courses
	},

	{
		route: 'books',
		name: 'Книги',
		icon: <BooksIcon />,
		id: TopLevelCategory.Books
	},

	{
		route: 'products',
		name: 'Продукты',
		icon: <ProductsIcon />,
		id: TopLevelCategory.Products
	},

	{
		route: 'services',
		name: 'Сервисы',
		icon: <ServicesIcon />,
		id: TopLevelCategory.Services
	}
];