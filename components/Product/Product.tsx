import React, { ForwardedRef, forwardRef, useRef, useState } from 'react';
import { ProductProps } from './Product.props';
import style from './Product.module.css';
import cn from 'classnames';
import { Card } from '../Card/Card';
import { declOfNum, priceRu } from '../../helpers/helpers';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';
import { Divider } from '../Divider/Divider';
import Image from 'next/image';
import { Review } from '../Review/Review';
import { ReviewForm } from '../ReviewForm/ReviewForm';
import { motion } from 'framer-motion';

export const Product = motion(forwardRef(({ product, className, ...props }: ProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {

	const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
	const reviewRef = useRef<HTMLDivElement>(null);

	const variants = {
		visible: { opacity: 1, height: 'auto' },
		hidden: { opacity: 0, height: 0 }
	};

	const handleReviewOpened = () => {
		setIsReviewOpened(!isReviewOpened);
	}

	const scrollToReview = () => {
		setIsReviewOpened(true);
		reviewRef.current?.scrollIntoView({
			block: 'start',
			inline: 'nearest',
			behavior: 'smooth',
		});
	}

	return (
		<div className={className} {...props} ref={ref}>
			<Card className={style.product}>
				<div className={style.logo}>
					<Image
						alt={product.title}
						src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
						width={70}
						height={70}
					/>
				</div>
				<div className={style.title}>{product.title}</div>
				<div className={style.price}>
					{priceRu(product.price)}
					<Tag size={'s'} color={'green'} className={style.oldPrice}>{priceRu(product.price - product.oldPrice)}</Tag>
				</div>
				<div className={style.credit}>
					{priceRu(product.credit)}/<span className={style.month}>мес</span>
				</div>
				<div className={style.rating}><Rating rating={product.reviewAvg ?? product.initialRating} /></div>
				<div className={style.tags}>{product.categories.map(c => <Tag key={c} className={style.category} color="ghost">{c}</Tag>)}</div>
				<div className={style.priceTitle}>цена</div>
				<div className={style.creditTitle}>кредит</div>
				<div className={style.rateTitle}>
					<a href="#ref" onClick={scrollToReview}>
						{product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
					</a>
				</div>
				<Divider className={style.hr} />
				<div className={style.description}>{product.description}</div>
				<div className={style.feature}>
					{product.characteristics.map(c => (
						<div className={style.characteristics} key={c.name}>
							<span className={style.characteristicsName}>{c.name}</span>
							<span className={style.characteristicsDot}></span>
							<span className={style.characteristicsValue}>{c.value}</span>
						</div>
					))}
				</div>
				<div className={style.advBlock}>
					{product.advantages && <div className={style.advantages}>
						<div className={style.advTitle}>Приемущества</div>
						<div>{product.advantages}</div>
					</div>}
					{product.disAdvantages && <div className={style.disAdvantages}>
						<div className={style.advTitle}>Недостатки</div>
						<div>{product.disAdvantages}</div>
					</div>}
				</div>
				<Divider className={cn(style.hr, style.hr2)} />
				<div className={style.actions}>
					<Button appearance={'primary'}>Узнать подробнее</Button>
					<Button
						appearance={'ghost'}
						arrow={isReviewOpened ? 'down' : 'right'}
						className={style.reviewButton}
						onClick={handleReviewOpened}
					>Читать отзывы
					</Button>
				</div>
			</Card>
			<motion.div animate={isReviewOpened ? 'visible' : 'hidden'} variants={variants} initial='hidden'>
				<Card color='blue' className={style.reviews} ref={reviewRef}>
					{product.reviews.map(r =>
						<div key={r._id}>
							<Review review={r} />
							<Divider />
							<ReviewForm productId={product._id} />
							<Divider />
						</div>
					)}
				</Card>
			</motion.div>
		</div>
	)
}))