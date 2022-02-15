import { PProps } from './Tag.props';
import style from './P.module.css';
import cn from 'classnames';

export const Tag = ({  size = 'm', children, className, ...props }: PProps): JSX.Element => {

	return (
		<p
			className={cn(style.p, className, {
				[style.s]: size =='s',
				[style.m]: size =='m',
				[style.l]: size =='l',
			})}
			{...props}
		>
			{children}
		</p>
	)
}