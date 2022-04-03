import React from "react";
import { GetStaticProps } from 'next';
import axios from "axios";

import { MenuItem } from "../interfaces/menu.interfaces";
import { withLayout } from "../Layout/Layout";
import { API } from "../helpers/api";

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
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
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