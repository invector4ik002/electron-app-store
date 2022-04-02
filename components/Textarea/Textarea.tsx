import { TextareaProps } from './Textarea.props';
import style from './Textarea.module.css';
import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';

export const Textarea = forwardRef(({ className, ...props }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {

	return (
		<textarea className={cn(className, style.input)} ref={ref} {...props} />
	)
})