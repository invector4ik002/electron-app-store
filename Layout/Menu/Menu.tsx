
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interfaces';
import { TopLevelCategory } from '../../interfaces/page.interfaces';
import styles from './Menu.module.css';
import cn from 'classnames';

import CoursesIcon from './courses.svg';
import BooksIcon from './books.svg';
import ProductsIcon from './products.svg';
import ServicesIcon from './services.svg';

const firstLevelMenu: FirstLevelMenuItem[] = [
	{
		route: 'courses',
		name: 'Курсы',
		icon: <CoursesIcon/>,
		id: TopLevelCategory.Courses
	},

	{
		route: 'books',
		name: 'Книги',
		icon: <BooksIcon/>,
		id: TopLevelCategory.Books
	},

	{
		route: 'products',
		name: 'Продукты',
		icon: <ProductsIcon/>,
		id: TopLevelCategory.Products
	},

	{
		route: 'services',
		name: 'Сервисы',
		icon: <ServicesIcon/>,
		id: TopLevelCategory.Services
	}
];

export const Menu = (): JSX.Element => {

	const { menu, firstCategory, setMenu } = useContext(AppContext);
	console.log('menu :>> ', firstLevelMenu);

	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map(m => (
					<div key={m.route}>
						<a href={`/${m.route}`}>
							<div className={cn(styles.firstLevel, {
								[styles.firstLevelActive]: m.id == firstCategory
							})}>
								{m.icon}
								<span>{m.name}</span>
							</div>
						</a>
						{m.id == firstCategory && buildSecondLevel(m)}
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