import { SortEnum, SortProps } from './Sort.props';
import SortIcon from './sort.svg';
import style from './Sort.module.css';
import cn from 'classnames';

export const Sort = ({ sort, setSort, className, ...props }: SortProps): JSX.Element => {

	return (
		<div className={cn(style.sort, className)}{...props}>
			<span
				className={cn({ 
					[style.active]: sort == SortEnum.Rating 
				})}
				onClick={() => setSort(SortEnum.Rating)}
			>
			<SortIcon className={style.sortIcon}/>По рейтингу
			</span>
			<span
				className={cn({
					[style.active]: sort == SortEnum.Price 
				})}
				onClick={() => setSort(SortEnum.Price)}
			>
			<SortIcon className={style.sortIcon}/>По цене
			</span>
		</div>
	)
}