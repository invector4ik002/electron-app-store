import { CardProps } from './Card.props';
import style from './Card.module.css';
import cn from 'classnames';

export const Card = ({ color='white', children, className, ...props }: CardProps): JSX.Element => {
  return (
    <div className={cn(style.card, className, {
      [style.blue]: color == 'blue'
    })} 
    {...props}
    >
      {children}
    </div>
  )
};
