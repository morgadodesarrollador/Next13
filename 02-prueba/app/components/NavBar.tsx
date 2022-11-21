import Link from "next/link"
import styles from './Navigation.module.css'

const links = [
    { label: 'Home', route: '/'},
    { label: 'About', route: '/about'},
    { label: 'Clientes', route: '/clientes'},
]

const NavBar = () => { 
  return (
    <nav className={styles['navigation-header']}>
       {
        links.map ( ({ label, route }) => (
            <Link className={styles['navigation-header-a']} href={route}>
              {label}
            </Link>
        )
       )}
                
    </nav>
  )
}

export default NavBar
