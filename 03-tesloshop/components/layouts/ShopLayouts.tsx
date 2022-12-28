import Head from "next/head"
import { FC } from 'react';

interface Props {
    title: string;
    pageDescription: string;
    //url completo a mostrar para compartir en redes sociales
    imageFullUrl?: string;
    children?: any;
}
 export const ShopLayouts:FC<Props> = (
    { children, title, pageDescription, imageFullUrl }) => {
  return (
    <>
        <Head>
            <title>{ title } </title>
            <meta name="description" content={ pageDescription } />
            {/* metas para las redes sociales */}
            <meta name="og:title" content={title} />
            <meta name="og:description" content = { pageDescription } />
            {
                imageFullUrl && (
                    <meta name="og:image" content={imageFullUrl} />
                )
            }
        </Head>
        <nav>
            { /* TODO: Navbar */ }
        </nav>
        { /* TODO: SideBar */ }
        <main style={{
            margin: '80px auto',
            maxWidth: '1440px',
            padding: '0px 30px'
        }}>
            { children }
        </main>
        <footer>
        { /* TODO: Footer */ }
        </footer>
    </>
  )
}

