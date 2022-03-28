import React from 'react';
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

export const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {

	const [isReviewOpened, setIsReviewOpened] = React.useState<boolean>(false)
	const handleReviewOpened = () => {
		setIsReviewOpened(!isReviewOpened);
	}
	console.log('product :>> ', product);
	return (
		<>
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
				<div className={style.rateTitle}>{product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</div>
				<Divider className={style.hr} />
				<div className={style.description}>{product.description}</div>
				<div className={style.feature}>
					{product.characteristics.map(c => (
						<div className={style.characteristics}>
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
			<Card color='blue' className={cn(style.reviews, {
				[style.opened]: isReviewOpened,
				[style.closed]: !isReviewOpened,
			})}>
				{product.reviews.map(r =>
					<>
						<Review key={r._id} review={r} />
						<Divider />
						<ReviewForm productId = {product._id} />
						<Divider />
					</>
				)}
			</Card>
		</>
	)
}