import React from 'react';
import { SearchProps } from './Search.props';
import style from './Search.module.css';
import cn from 'classnames';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {

	const [search, setSearch] = React.useState<string>('');
	console.log('search :>> ', search);
	return (
		<form className={cn(className, style.input)}>
			<Input
				placeholder='Поиск...'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
		</form>
	)
}