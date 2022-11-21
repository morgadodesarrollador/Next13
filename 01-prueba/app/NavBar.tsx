import Link from "next/link"



const NavBar = () => {
  return (
    <nav>
        <Link className="mx-2" href= {'/'}>Home</Link>
        <Link className="mx-2" href= {'/clientes'}>Clientes</Link>
    </nav>
  )
}

export default NavBar
