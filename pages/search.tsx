import React from "react";
import { GetStaticProps } from 'next';
import axios from "axios";

import { MenuItem } from "../interfaces/menu.interfaces";
import { withLayout } from "../Layout/Layout";

export function Search(){
  return (
    <>
Search
    </>
  )
}

export default withLayout(Search);

export const getStaticProps: GetStaticProps<HomProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });

  return {
    props: {
      menu,
      firstCategory
    }
  }
}

interface HomProps extends Record <string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}