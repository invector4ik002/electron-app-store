import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import cn from 'classnames';

import { ReviewFormProps } from './ReviewForm.props';
import style from './ReviewForm.module.css';
import Input from '../Input/Input';
import { Button } from '../Button/Button';
import CloseIcon from './close.svg';
import { IReviewForm, IReviewSentResponse } from './ReviewForm.interface';
import { API } from '../../helpers/api';
import Rating from '../Rating/Rating';
import Textarea from '../Textarea/Textarea';

export const ReviewForm = ({ productId, isOpened, className, ...props }: ReviewFormProps): JSX.Element => {

   const [isSuccess, setIsSuccess] = useState<boolean>(false);
   const [error, setIsError] = useState<string>();

   const { register, control, handleSubmit, formState: { errors }, reset } = useForm<IReviewForm>();

   const onSubmit = async (formData: IReviewForm) => {
      try {
         const { data } = await axios.post<IReviewSentResponse>(API.review.createDemo, { ...formData, productId });

         if (data.message) {
            setIsSuccess(true);
            reset();
         } else {
            setIsError('Что-то пошло не так');
         }
      } catch (e: any) {
         setIsError(e.message);
      }
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <div className={cn(style.reviewForm, className)}
            {...props}
         >
            <Input
               {...register('name', { required: { value: true, message: 'Заполните имя' } })}
               placeholder='Имя'
               error={errors.name}
               tabIndex={isOpened ? 0 : -1}
            />
            <Input
               {...register('title', { required: { value: true, message: 'Заполните заголовок отзыва' } })}
               placeholder='Заголовок отзыва'
               className={style.title}
               error={errors.title}
               tabIndex={isOpened ? 0 : -1}
            />
            <div className={style.rating}>
               <span>Оценка:</span>
               <Controller
                  control={control}
                  name='rating'
                  rules={{ required: { value: true, message: 'Укажите рейтинг' } }}
                  render={({ field }) => (
                     <Rating
                        isEditable
                        rating={field.value}
                        ref={field.ref}
                        setRating={field.onChange}
                        error={errors.rating}
                        tabIndex={isOpened ? 0 : -1}
                     />
                  )}
               />

            </div>
            <Textarea
               {...register('description', { required: { value: true, message: 'Заполните отзыва' } })}
               placeholder='Текст отзыва'
               className={style.description}
               error={errors.description}
               tabIndex={isOpened ? 0 : -1}
            />
            <div className={style.submit}>
               <Button
                  appearance='primary'
                  type='submit'
                  tabIndex={isOpened ? 0 : -1}
               >
                  Отправить
               </Button>
               <span className={style.info}>
                  * Перед публикацией отзыв пройдет предварительную модерацию и проверку
               </span>
            </div>
         </div>
         {isSuccess && <div className={cn(style.success, style.panel)} onClick={() => setIsSuccess(false)}>
            <div className={style.successTitle}>
               Ваш отзыв будет отправлен
            </div>
            <div>
               Ваш отзыв будет опубликован после проверки
            </div>
            <CloseIcon className={style.closeIcon} />
         </div>}
         {error && <div className={cn(style.error, style.panel)} onClick={() => setIsError(undefined)}>
            Что то пошло не так попробуйте перезагрузить страницу
            <CloseIcon className={style.closeIconError} />
         </div>}
      </form>
   )
};
