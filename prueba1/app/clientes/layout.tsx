
interface Props {
  children: React.ReactNode
}

export default function Layout ( {children} : Props ){
  return (
    <>
        <nav>Links</nav>
        <div>{ children }</div>
  
    </>
  )
}



// Props: {
//     children: React.ReactNode
// }
// const layout = ({ children }: Props) => {
//   return (
//     <>
//         <nav>Links</nav>
//         <div>{ children }</div>

//     </>
//   )
// }

// export default layout
