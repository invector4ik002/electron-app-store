import { ProductProps } from './Product.props';
import style from './Product.module.css';
import cn from 'classnames';

export const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {

	return (
		<div>
			{product.title}
		</div>
	)
}