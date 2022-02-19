
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interfaces';
import { TopLevelCategory } from '../../interfaces/page.interfaces';
import styles from './ Menu.module.css';
import cn from 'classnames';

import CoursesIcon from './icons/courses.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import ServicesIcon from './icons/services.svg';

const firstLevelMenu: FirstLevelMenuItem[] = [
	{
		route: 'courses',
		name: 'Курсы',
		icon: CoursesIcon,
		id: TopLevelCategory.Courses
	},

	{
		route: 'books',
		name: 'Книги',
		icon: BooksIcon,
		id: TopLevelCategory.Books
	},

	{
		route: 'products',
		name: 'Продукты',
		icon: ProductsIcon,
		id: TopLevelCategory.Products
	},

	{
		route: 'services',
		name: 'Сервисы',
		icon: ServicesIcon,
		id: TopLevelCategory.Services
	}
];

export const Menu = (): JSX.Element => {

	const { menu, firstCategory, setMenu } = useContext(AppContext);
	console.log('menu :>> ', menu, firstCategory);

	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map(menu => (
					<div key={menu.route}>
						<a href={`/${menu.route}`}>
							<div className={cn(styles.firstLevel, {
								[styles.firstLevelActive]: menu.id == firstCategory
							})}>
								{menu.icon}
								<span>
									{menu.name}
								</span>
							</div>
						</a>
						{menu.id == firstCategory && buildSecondLevel(menu)}
					</div>
				))}
			</>
		)
	};

	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<div>
				{menu.map(m => (
					<div key={m._id.secondCategory}>
						<div className={cn(styles.secondLevelBlock, {
							[styles.secondLevelBlockOpened]: m.isOpened
						})}>
							{m._id.secondCategory}
							{buildThirdLevel(m.pages, menuItem.route)}
						</div>
					</div>
				))}
			</div>
		)
	};

	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return (
			pages.map(p => (
				<a href={`/${route}/${p.alias}`} className={cn(styles.thirdLevel, {
					[styles.thirdLevelActive]: true,
				})}>
					{ p.category }
				</a>
			))
		)
	};

	return (
		<div className={styles.menu}>
			{buildFirstLevel()}
		</div>
	)
};