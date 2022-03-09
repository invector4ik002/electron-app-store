import React from 'react';
import style from './Search.module.css';
import cn from 'classnames';

import { SearchProps } from './Search.props';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import GlassIcon from './glass.svg';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {

	const [search, setSearch] = React.useState<string>('');
	console.log('search :>> ', search);
	return (
		<form className={cn(className, style.search)}>
			<Input
				className={style.input}
				placeholder='Поиск...'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<Button
				className={style.button}
				appearance='primary'
				onClick={() => { }}
			>
				<GlassIcon />
			</Button>
		</form>
	)
}