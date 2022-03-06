import { RatingProps } from './Rating.props';
import style from './Rating.module.css';
import cn from 'classnames';
import { useState, useEffect } from 'react';
import StarIcon from './Vector.svg';

export const Rating = ({ isEditable = false, setRating, rating, className, ...props }: RatingProps): JSX.Element => {

  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constructRating(rating)
  }, [rating])

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
        >
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGElement>) => {
              return isEditable && handleSpace(idx + 1, e);
            }}
          />
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
  const handleSpace = (idx: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code !== 'Space' || !setRating) {
      return;
    }
    setRating(idx);
  }
  return (
    <div {...props}>
      {ratingArray.map((star, idx) => <span key={idx}>{star}</span>)}
    </div>
  )
}