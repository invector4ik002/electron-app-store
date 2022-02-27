import style from './ProductComponent.module.css';
import { ProductComponentProps } from './ProductComponentProps';
import { Card, Htag, Tag } from '../../components';

export const ProductComponent = ({ products, page, firstCategory }: ProductComponentProps): JSX.Element => {
  console.log('page :>> ', page);
  console.log('products :>> ', products);
  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        <Htag tag='h1'>{page.title}</Htag>
        {products && <Tag color='grey' size='m'>{products.length}</Tag>}
        <span>сортировка</span>
      </div>
      <div>
        {products && products.map((p) => <div key={p._id}>{p.title}</div>)}
      </div>
      <div className={style.hhTitle}>
        <Htag tag='h2'>Вакансии - {page.category}</Htag>
        <Tag color='red' size='m'>hh.ru</Tag>
      </div>
      <div className={style.hh}>
        <Card className={style.hhCound}>
          <div className={style.hhStatTitle}>Всего вакансий</div>
          <div className={style.hhStatCound}>{page.hh?.count}</div>
        </Card>
      </div>
    </div>
  )
}