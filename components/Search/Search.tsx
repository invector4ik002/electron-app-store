import React from 'react';
import style from './Search.module.css';
import cn from 'classnames';

import { SearchProps } from './Search.props';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import GlassIcon from './glass.svg';
import { useRouter } from 'next/router';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {

	const [search, setSearch] = React.useState<string>('');

	const router = useRouter();

	const goToSearch =(e: any)=> {
		e.preventDefault();
		router.push({
			pathname: '/search',
			query: {
				q: search
			}
		})
	}

	const handleKeyDown =(e: KeyboardEvent)=> {
		if(e.key == 'Enter') {
			goToSearch(e);
		}
	}

	return (
		<form className={cn(className, style.search)} {...props}>
			<Input
				className={style.input}
				placeholder='Поиск...'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<Button
				className={style.button}
				appearance='primary'
				onClick={goToSearch}
				onKeyPress={handleKeyDown}
			>
				<GlassIcon />
			</Button>
		</form>
	)
}