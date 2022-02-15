import { TagProps } from './Tag.props';
import style from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({ size = 'm', children, color = 'primary', href, className, ...props }: TagProps): JSX.Element => {

	return (
		<div
			className={cn(style.tag, className, {
				[style.s]: size == 's',
				[style.m]: size == 'm',
				[style.ghost]: color == 'ghost',
				[style.grey]: color == 'grey',
				[style.red]: color == 'red',
				[style.green]: color == 'green',
				[style.primary]: color == 'primary',
			})}
			{...props}
		>{
				href ?
					<a href={href}>{children}</a>
					: <>{children}</>
			}
		</div>
	)
}