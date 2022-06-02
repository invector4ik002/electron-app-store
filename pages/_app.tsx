import { AppProps } from 'next/dist/shared/lib/router/router';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
    <meta property='og:url' content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath}/>
    <meta property='og:locale' content='ru_RU'/>
  </>
  return <Component {...pageProps} />
}

export default MyApp
