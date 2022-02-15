import { Htag, Button, P } from "../components";

export default function Home() {
  return (
    <>
     <Htag tag="h1">Тест заголовок</Htag>
     <Button appearance='primary' arrow='right'>ТестКнопка</Button>
     <Button appearance='ghost' arrow='down'>ТестКнопка</Button>
     <P size="s">Малый ТестТекст</P>
     <P size="m">Медовый ТестТекст</P>
     <P size="l">Ларджовый ТестТекст</P>
    </>
  )
}
