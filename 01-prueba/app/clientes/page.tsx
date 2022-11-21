import { Suspense } from "react";

import { IClientes, ICliente } from "./interfaces";
import Loading from "./loading";
import ClienteItem from "./components/ClienteItem";

const getData = async () => {
  const res = await fetch ('https://rickandmortyapi.com/api/character');
  return res.json();
}

const getClientes = async(): Promise<IClientes[]> => {
  const res = await fetch('http://localhost:3002/clientes', { //manejo del cache
      cache: 'no-store'
  });
  return await res.json() as Cliente[]

}

const page = async() => {
  const clientes = await getClientes();
  console.log(clientes);
  return (
    <div className="row">
      <div className="col-6">
        <h2>Clientes</h2>
        <ul className="list-group">
          {
            clientes.map( (cliente ) => {
              return(<ClienteItem key={cliente.id} cliente={cliente} />)
            })
          }
        </ul>
      </div>
    </div>
  )
}


// const page1 = async () => {
//   const data = await getData();
//   return (
//     <Suspense fallback={<Loading />}>
//       <h1>Seccion de Clientes</h1>
//       <h2>En esta sección ... {data.results[0].name }</h2>
//       <ul>listado 
//         {
//           data.results.map ( (p:any)  => {
//               return (<li key={p.id}> { p.name }</li>)
//           })
//         }
//       </ul>

//     </Suspense>
   
//   )
// }

export default page


// export default function Page() {
//   return  (
//     <div>Home Cliente ...</div>
//   )
// }
