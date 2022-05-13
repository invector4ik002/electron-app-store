import React from 'react';
import { HeaderProps } from './Header.props';
import style from './Header.module.css';
import cn from 'classnames';
import Logo from './logo.svg';
import { ButtonIcon } from '../../components/ButtonIcon/ButtonIcon';
import { motion } from 'framer-motion';
import { Sidebar } from '../Sidebar/Sidebar';
import { useRouter } from 'next/router';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {

	const [isOpened, setIsOpened] = React.useState<boolean>(false);
	const router = useRouter();

	React.useEffect(() => {
		setIsOpened(false);
	}, [router])

	const menuOpened = () => {
		setIsOpened(true);
	};

	const menuClosed = () => {
		setIsOpened(false);
	};

	const variants = {
		opened: {
			opacity: 1,
			x: 0,
			transition: {
				stiffness: 20,
			}
		},

		closed: {
			opacity: 0,
			x: '100%',
		}
	}

	return (
		<header className={cn(className, style.header)}  {...props}>
			<Logo />
			<ButtonIcon
				onClick={menuOpened}
				appearance='white'
				icon='menu'
			/>
			<motion.div
				className={style.mobileMenu}
				variants={variants}
				initial={'closed'}
				animate={isOpened ? 'opened' : 'closed'}
			>
				<Sidebar />
				<ButtonIcon
					className={style.nemuClose}
					onClick={menuClosed}
					appearance='white'
					icon='close'
				/>
			</motion.div>
		</header>
	)
}