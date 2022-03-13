import { ProductProps } from './Product.props';
import style from './Product.module.css';
import cn from 'classnames';
import { Card } from '../Card/Card';
import { priceRu } from '../../helpers/helpers';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';

export const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {
	console.log('product :>> ', product);
	return (
		<Card className={style.product}>
			<div className={style.logo}><img src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} /></div>
			<div className={style.title}>{product.title}</div>
			<div className={style.price}>{priceRu(product.price)}</div>
			<div className={style.credit}>{priceRu(product.credit)}</div>
			<div className={style.rating}><Rating rating={product.reviewAvg ?? product.initialRating} /></div>
			<div className={style.tags}>{product.categories.map(c => <Tag key={c} color="ghost">{c}</Tag>)}</div>
			<div className={style.priceTitle}>цена</div>
			<div className={style.creditTitle}>кредит</div>
			<div className={style.rateTitle}>{product.reviewCount} отзывов</div>
			<div className={style.hr}><hr className={style.hr}/></div>
			<div className={style.description}>{product.description}</div>
			<div className={style.feature}>фичи</div>
			<div className={style.advBlock}>
				<div className={style.advantages}>
					<div>Приемущества</div>
					<div>{product.advantages}</div>
				</div>
				<div className={style.disAdvantages}>
					<div>Недостатки</div>
					<div>{product.disAdvantages}</div>
				</div>
			</div>
			<div className={style.hr}><hr className={style.hr}/></div>
			<div className={style.action}>
				<Button appearance={'primary'}>Узнать подробнее</Button>
				<Button appearance={'ghost'} arrow={'right'}>Читать отзывы</Button>
			</div>
		</Card>
	)
}