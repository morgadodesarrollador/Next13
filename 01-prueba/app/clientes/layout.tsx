import NavBar from "./NavBar"

interface Props {
  children: React.ReactNode
}


const Layout = ( { children }: Props ) =>  {
  return (
    <>
        <NavBar/>
        <div>{ children }</div>
  
    </>
  )
}
export default Layout
// export default function Layout ( {children} : Props ){
//   return (
//     <>
//         <NavBar/>
//         <div>{ children }</div>
  
//     </>
//   )
// }


