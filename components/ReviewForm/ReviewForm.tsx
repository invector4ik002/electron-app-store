import { ReviewFormProps } from './ReviewForm.props';
import style from './ReviewForm.module.css';
import cn from 'classnames';
import { Input } from '../Input/Input';
import { Rating } from '../Rating/Rating';
import { Textarea } from '../Textarea/Textarea';

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {

  return (
    <div className={cn(style.reviewForm, className)}
      {...props}
    >
      <Input />
      <Input />
      <span>Оценка:</span>
      <Rating rating={0}/>
      <Textarea />
    </div>
  )
};
