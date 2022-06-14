import { ForwardedRef, forwardRef } from 'react';
import { CardProps } from './Card.props';
import style from './Card.module.css';
import cn from 'classnames';

const Card = forwardRef(({ color = 'white', children, className, ...props }: CardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
   return (
      <div className={cn(style.card, className, {
         [style.blue]: color == 'blue'
      })}
         {...props}
         ref={ref}
      >
         {children}
      </div>
   )
});
Card.displayName = 'Card'
export default Card;