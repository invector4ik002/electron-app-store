import { ReviewProps } from './Review.props';
import style from './Review.module.css';
import cn from 'classnames';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import UserIcon from './user.svg';
import { Rating } from '../Rating/Rating';

export const Review = ({ review, className, ...props }: ReviewProps): JSX.Element => {

  console.log('review :>> ', review);

  const { name, title, description, createdAt, rating } = review;

  return (
    <div className={cn(style.reviews, className)}
      {...props}
    >
      <UserIcon />
      <div className={cn(style.title)}>
        <span className={style.name}>{name}:</span>&nbsp;&nbsp;
        <span>{title}</span>
      </div>
      <div className={style.date}>
        {format(new Date(createdAt), 'dd MMMM yyyy', { locale: ru })}
      </div>
      <div className={style.rating}>
        <Rating rating={rating} />
      </div>
      <div className={style.description}>
        {description}
      </div>
    </div>
  )
};
