import Link from 'next/link'
import { FC } from 'react'
import { ICliente } from '../interfaces'

interface Props {
    cliente: ICliente
}
const ClienteItem: FC<Props> = ({ cliente }) => {
  console.log(cliente)
  return (
    <li className="list-group-item" >
      
      <Link href={`/clientes/${cliente.id}`}>
        { cliente.nombre }
      </Link>
    </li>
  )
}

export default ClienteItem;