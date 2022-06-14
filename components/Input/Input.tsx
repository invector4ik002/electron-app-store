import { InputProps } from './Input.props';
import style from './Input.module.css';
import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';

const Input = forwardRef(({ className, error, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {

	return (
		<div className={cn(style.inputWrapper, className)}>
			<input 
				className={cn( style.input, {
					[style.error]: error, 
				})}
				ref={ref}
				{...props}
			/>
			{error && <span className={style.errorMessage}>{error.message}</span>}
		</div>
	)
});
Input.displayName = 'Input'
export default Input;