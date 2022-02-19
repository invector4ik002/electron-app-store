import React from "react";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import axios from "axios";

import { MenuItem } from "../../interfaces/menu.interfaces";
import { TopPageModel } from "../../interfaces/page.interfaces";
import { ParsedUrlQuery } from "querystring";
import { ProductModel } from "../../interfaces/product.interfaces";

const firstCategory = 0;

export default function Course({ menu, page, products }: CourseProps): JSX.Element {

  console.log('menu :>> ', menu);
  console.log('page :>> ', page);
  console.log('products :>> ', products);
  return (
    <>
    {products.length}
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {

  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });

  return {
    paths: menu.flatMap(m => m.pages.map(p => '/courses/' + p.alias)),
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps<CourseProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {

  if(!params) {
    return {
      notFound: true 
    };
  }

  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });

  const { data: page } = await axios.get<TopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias);
  const { data: products } = await axios.post<ProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
    category: page.category,
    limit: 10,
  });
  
  return {
    props: {
      menu,
      firstCategory,
      page,
      products
    }
  }
}

interface CourseProps {
  menu: MenuItem[];
  firstCategory: number;
  page: TopPageModel;
  products: ProductModel[];
}
// import React from "react";
// import { GetStaticProps } from 'next';
// import axios from "axios";

// import { Htag, Button, P, Tag, Rating } from "../components";
// import { Layout } from "../Layout/Layout";
// import { MenuItem } from "../interfaces/menu.interfaces";

// export default function Product({ menu }: HomProps) {

//   console.log('object :>> ', menu);
//   return (
//     <div>alias</div>
//   )
// }

// export const getStaticProps: GetStaticProps<ProductProps> = async () => {
//   const firstCategory = 0;
//   const { data: menu } = await axios.post<ProductProps[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
//     firstCategory
//   });
  
//   return {
//     props: {
//       menu,
//       firstCategory
//     }
//   }
// }

// interface ProductProps {
//   menu: MenuItem[];
//   firstCategory: number;
// }