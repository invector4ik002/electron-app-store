import { SidebarProps } from './Sidebar.props';
import style from './Sidebar.module.css';
import cn from 'classnames';
import { Menu } from '../Menu/Menu';
import Logo from '../../Layout/logo.svg'

export const Sidebar = ({className, ...props }: SidebarProps): JSX.Element => {

	return (
		<div className={cn(className, style.sidebar)} {...props}>
			<Logo className={style.logo}/>
			Поиск
			<Menu />
		</div>
	)
}