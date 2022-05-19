import { LayoutProps } from './Layout.props';
import styles from './layout.module.css';
import cn from 'classnames';
import { Sidebar } from './Sidebar/Sidebar';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { AppContextProvider, IAppContext } from '../context/app.context';
import { FunctionComponent } from 'react';
import { Up } from '../components';
import React from 'react';

const Layout = ({ children }: LayoutProps): JSX.Element => {

	const [isSkipLinkDisplayed, setIsSkipLinkDisplayed] = React.useState<boolean>(false);
	const bodyRef = React.useRef<HTMLDivElement>(null);

	const skipContentAction = (key: React.KeyboardEvent) => {
		if (key.code == 'Space' || key.code == 'Enter') {
			key.preventDefault;
			bodyRef.current?.focus();
		}
		setIsSkipLinkDisplayed(false);
	};

	return (
		<div className={styles.wrapper}>
			<a
				onFocus={() => setIsSkipLinkDisplayed(true)}
				tabIndex={1} 
				className={cn(styles.skipLink, {
				[styles.displayed]: isSkipLinkDisplayed,})}
				onKeyDown={skipContentAction}
			>
				Сразу к содержанию
			</a>
			<Header className={styles.header}/>
			<Sidebar className={styles.sidebar}/>
				<main className={styles.body} ref={bodyRef} tabIndex={0}>
					{children}
				</main>
			<Footer className={styles.footer}/>
			<Up/>
		</div>
	)
}

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
				<Layout>
					<Component {...props} />
				</Layout>
			</AppContextProvider>
		);
	};
};