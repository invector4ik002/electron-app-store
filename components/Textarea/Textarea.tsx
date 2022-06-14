import { TextareaProps } from './Textarea.props';
import style from './Textarea.module.css';
import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';

const Textarea = forwardRef(({ className, error, ...props }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {

	return (
		<div className={cn(style.textareaWrapper, className)}>
			<textarea className={cn(style.textarea, {
				[style.error]: error,
			})} ref={ref} {...props} />
			{error && <span className={style.errorMessage}>{error.message}</span>}
		</div>
	)
});

Textarea.displayName = 'Textarea'
export default Textarea;