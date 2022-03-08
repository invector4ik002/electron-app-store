import React from "react";
import { GetStaticProps } from 'next';
import axios from "axios";

import { Htag, Button, P, Tag, Rating, Input } from "../components";
import { MenuItem } from "../interfaces/menu.interfaces";
import { withLayout } from "../Layout/Layout";

export function Home({ menu }: HomProps) {
  const [rating, setRating] = React.useState<number>(4)

  return (
    <>
      <Htag tag="h1">Тест заголовок</Htag>
      <Button appearance='primary' arrow='right'>ТестКнопка</Button>
      <Button appearance='ghost' arrow='down'>ТестКнопка</Button>
      <P size="s">Малый ТестТекст</P>
      <P size="m">Медовый ТестТекст</P>
      <P size="l">Ларджовый ТестТекст</P>
      <Tag size="s" color='red'>ТестТег</Tag>
      <Tag size="s" color='ghost'>ТестТег</Tag>
      <Tag size="s" color='grey'>ТестТег</Tag>
      <Tag size="s" color='green'>ТестТег</Tag>
      <Tag size="s" color='primary'>ТестТег</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
      <Input placeholder="test"/>
    </>
  )
}

export default withLayout(Home);

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