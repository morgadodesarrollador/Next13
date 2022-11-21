
import { ICliente } from '../interfaces';

const getCliente = async ( clienteId: number): Promise<ICliente> => {
    const res = await fetch(`http://localhost:3002/clientes/${clienteId}`, {
        next: { revalidate: 60 }
    });

    return await res.json() as cliente
}

interface Props {
    params: {
        id: string
    }
}

const page = async({ params }) => {
    const cliente = await getCliente( +params.id )
  return (
    <div className="row">
        <div className="col-6">
            <h2>Cliente: { cliente.id } </h2>
            <h5>Nombre: {cliente.nombre }</h5>
            <code>{ JSON.stringify( cliente )}</code>
        </div>

    </div>
  )
}

export default page;