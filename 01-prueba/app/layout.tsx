import './globals.css'
import NavBar from './NavBar';
import Head from './head';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Head />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"  integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous"></link>

      </head>
      <body>
        <header>
          <NavBar />

        </header>
        <main className='container'>
          {children}
        </main>
      </body>
    </html>
  )
}
