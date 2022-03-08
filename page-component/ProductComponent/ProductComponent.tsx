import style from './ProductComponent.module.css';
import { ProductComponentProps } from './ProductComponentProps';
import { Htag, Tag, DataHh, Advantages, P, Sort } from '../../components';
import { TopLevelCategory } from '../../interfaces/page.interfaces';
import { SortEnum } from '../../components/Sort/Sort.props';
import { useReducer } from 'react';
import { sortReducer } from './sort.reducer';

export const ProductComponent = ({ products, page, firstCategory }: ProductComponentProps): JSX.Element => {
  // console.log('page :>> ', page);
  // console.log('products :>> ', products);
const [{ products: sortedProducts, sort }, dispathSort] = useReducer(sortReducer, { products, sort: SortEnum.Rating });

const setSort = (sort: SortEnum) => {
  dispathSort({ type: sort });
};

  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        <Htag tag='h1'>{page.title}</Htag>
        {products && <Tag color='grey' size='m'>{products.length}</Tag>}
        <Sort sort={sort} setSort={setSort}/> 
      </div>
      <div>
        {sortedProducts && sortedProducts.map((p) => <div key={p._id}>{p.title}</div>)}
      </div>
      <div className={style.hhTitle}>
        <Htag tag='h2'>Вакансии - {page.category}</Htag>
        <Tag color='red' size='m'>hh.ru</Tag>
      </div>
      {firstCategory == TopLevelCategory.Courses && page.hh && <DataHh {...page.hh} />}
      {page.advantages && page.advantages.length > 0 && <>
        <Htag tag='h2'>Приемущества</Htag>
        <Advantages advantages={page.advantages} />
      </>}
      {page.seoText && <div className={style.seo} dangerouslySetInnerHTML={{__html: page.seoText}}/>}
      <Htag tag='h2'>Получаемые навыки</Htag>
      {page.tags.map(t => <Tag key={t} color='primary'>{t}</Tag>)}
    </div>
  )
}