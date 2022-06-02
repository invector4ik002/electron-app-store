import React from "react";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import axios from "axios";

import { MenuItem } from "../../interfaces/menu.interfaces";
import { TopLevelCategory, TopPageModel } from "../../interfaces/page.interfaces";
import { ParsedUrlQuery } from "querystring";
import { ProductModel } from "../../interfaces/product.interfaces";
import { withLayout } from "../../Layout/Layout";
import { firstLevelMenu } from "../../helpers/helpers";
import { ProductComponent } from "../../page-component";
import { API } from "../../helpers/api";
import Head from 'next/head';

function Course({ menu, page, products, firstCategory }: CourseProps): JSX.Element {

  return (
    <>
    <Head>
      <title>{page.metaTitle}</title>
      <meta name='description' content={page.metaDescription}/>
    </Head>
      <ProductComponent
        firstCategory={firstCategory}
        products={products}
        page={page}
      />
    </>
  )
}

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {

  let paths: string[] = [];

  for (const m of firstLevelMenu) {
    const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
      firstCategory: m.id
    });
    paths = paths.concat(menu.flatMap(s => s.pages.map(p => `/${m.route}/${p.alias}`)));
  }

  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps<CourseProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {

  if (!params) {
    return {
      notFound: true
    };
  }

  const firstCategoryItem = firstLevelMenu.find(m => m.route == params.type);

  if (!firstCategoryItem) {
    return {
      notFound: true
    };
  }
  try {
    const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
      firstCategory: firstCategoryItem.id
    });

    if (menu.length == 0) {
      return {
        notFound: true
      }
    }

    const { data: page } = await axios.get<TopPageModel>(API.topPage.byAlias + params.alias);

    const { data: products } = await axios.post<ProductModel[]>(API.product.find, {
      category: page.category,
      limit: 10,
    })

    return {
      props: {
        menu,
        firstCategory: firstCategoryItem.id,
        page,
        products
      }
    }
  } catch {
    return {
      notFound: true
    };
  }
}

interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}