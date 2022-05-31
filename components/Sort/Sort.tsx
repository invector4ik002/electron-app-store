import { SortEnum, SortProps } from './Sort.props';
import SortIcon from './sort.svg';
import style from './Sort.module.css';
import cn from 'classnames';

export const Sort = ({ sort, setSort, className, ...props }: SortProps): JSX.Element => {

	return (
		<div className={cn(style.sort, className)}{...props}>
			<button
				className={cn({ 
					[style.active]: sort == SortEnum.Rating 
				})}
				onClick={() => setSort(SortEnum.Rating)}
			>
			<SortIcon className={style.sortIcon}/>По рейтингу
			</button>
			<button
				className={cn({
					[style.active]: sort == SortEnum.Price 
				})}
				onClick={() => setSort(SortEnum.Price)}
			>
			<SortIcon className={style.sortIcon}/>По цене
			</button>
		</div>
	)
}