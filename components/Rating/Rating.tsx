import { RatingProps } from './Rating.props';
import style from './Rating.module.css';
import cn from 'classnames';
import { useState, useEffect, forwardRef, ForwardedRef, useRef } from 'react';
import StarIcon from './Vector.svg';

export const Rating = forwardRef(({ isEditable = false, error, setRating, rating, className, tabIndex, ...props }: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {

  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
  const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    constructRating(rating)
  }, [rating, tabIndex]);

  const computeFocus = (r: number, i: number): number => {

    if (!isEditable) {
      return -1;
    }

    if (!rating && i == 0) {
      return tabIndex?? 0;
    }

    if (r == i + 1) {
      return tabIndex?? 0;
    }
    return -1;
  };

  const constructRating = (currentRating: number) => {
    const updateRating = ratingArray.map((star: JSX.Element, idx: number) => {
      return (
        <span
          className={cn(style.star, {
            [style.filled]: idx < currentRating,
            [style.editable]: isEditable
          })}
          onMouseEnter={() => changeDisplay(idx + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(idx + 1)}
          tabIndex={computeFocus(rating, idx)}
          onKeyDown={handleKey}
          ref={r => ratingArrayRef.current?.push(r)}
        >
          <StarIcon />
        </span>
      )
    });
    setRatingArray(updateRating)
  };

  const changeDisplay = (idx: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(idx)
  }

  const onClick = (idx: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(idx);
  }
  const handleKey = (e: KeyboardEvent<SVGElement>) => {

    if (!isEditable || !setRating) {
      return
    }

    if (e.code == 'ArrowRight' || e.code == 'ArrowUp') {
      if (!rating) {
        setRating(1)
      } else {
        e.preventDefault()
        setRating(rating < 5 ? rating + 1 : 5)
      }
      ratingArrayRef.current[rating]?.focus();
    }

    if (e.code == 'ArrowLeft' || e.code == 'ArrowDown') {
      e.preventDefault()
      setRating(rating > 1 ? rating - 1 : 1);
      ratingArrayRef.current[rating - 2]?.focus();
    }
  }

  return (
    <div {...props} className={cn(style.ratingWrapper, {
      [style.error]: error,
    })}>
      {ratingArray.map((star, idx) => <span key={idx}>{star}</span>)}
      {error && <span className={style.errorMessage}>{error.message}</span>}
    </div>
  )
})