import style from './ProductComponent.module.css';
import { ProductComponentProps } from './ProductComponentProps';
import { Htag, Tag, DataHh, Advantages, P } from '../../components';
import { TopLevelCategory } from '../../interfaces/page.interfaces';

export const ProductComponent = ({ products, page, firstCategory }: ProductComponentProps): JSX.Element => {
  // console.log('page :>> ', page);
  // console.log('products :>> ', products);

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