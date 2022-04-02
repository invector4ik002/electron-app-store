import { ReviewFormProps } from './ReviewForm.props';
import style from './ReviewForm.module.css';
import cn from 'classnames';
import { Input } from '../Input/Input';
import { Rating } from '../Rating/Rating';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';
import CloseIcon from './close.svg';
import { Controller, useForm } from 'react-hook-form';
import { IReviewForm } from './ReviewForm.interface';

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {

   const { register, control, handleSubmit} = useForm<IReviewForm>();

   const onSubmit = (data: IReviewForm) => {
      console.log(data);
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <div className={cn(style.reviewForm, className)}
            {...props}
         >
            <Input 
               {...register('name')} 
               placeholder='Имя' 
            />
            <Input 
               {...register('title')} 
               placeholder='Заголовок отзыва' 
               className={style.title} 
            />
            <div className={style.rating}>
               <span>Оценка:</span>
               <Controller 
                  control={control}
                  name='rating'
                  render={({ field }) => (
                     <Rating isEditable rating={field.value} ref={field.ref} setRating={field.onChange}/>
                  )}              
               />
               
            </div>
            <Textarea {...register('description')} placeholder='Текст отзыва' className={style.description} />
            <div className={style.submit}>
               <Button appearance='primary' type='submit'>
                  Отправить
               </Button>
               <span className={style.info}>
                  * Перед публикацией отзыв пройдет предварительную модерацию и проверку
               </span>
            </div>
         </div>
         <div className={style.success}>
            <div className={style.successTitle}>
               Ваш отзыв будкт отправлен
            </div>
            <div>
               Ваш отзыв будет опубликован после проверки
            </div>
            <CloseIcon className={style.closeIcon} />
         </div>
      </form>
   )
};
