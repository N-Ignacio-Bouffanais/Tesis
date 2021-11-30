import Layout from '../components/Layout'
import { useRouter } from "next/router";

export default function Home({trabajadores}) {

  const router = useRouter();

  if(trabajadores.length === 0)return (
    <div>
      <Layout></Layout>
      <div className="py-8 text-center">
        <h2 className="font-extrabold text-6xl">No hay usuarios</h2>
        <p>Actualmente no hay ningun dato para mostrar en la tabla</p>
      </div>
    </div>
  );

  return (
    <div>
      <Layout></Layout>
      <div className="py-8 text-center">
        <h2 className="font-extrabold text-6xl">Tabla de usuarios</h2>
      </div>
      <div className="row">
        <div className="col md-12">
          <table className="table text-gray-900 border-separate space-y-6 ">
            <thead className="text-gray-900 text-lg font-bold text-center">
              <tr>
                <th>Fecha de creacion</th>
                <th>Fecha de actualizacion</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>edad</th>
                <th>Area de trabajo</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {trabajadores.map((trabajador) => (
                <tr key={trabajador._id}>
                  <td>{trabajador.createdAt}</td>
                  <td>{trabajador.updatedAt}</td>
                  <td>{trabajador.nombre}</td>
                  <td>{trabajador.apellido}</td>
                  <td>{trabajador.edad}</td>
                  <td>{trabajador.area_trabajo}</td>
                  <td className="inline-flex space-x-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded">
                      Editar
                    </button>
                    
                    <button 
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 rounded"
                    onClick={()=> router.push(`/Trabajadores/${trabajador._id}`)}
                    >
                      Ver dispositivos
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async (ctx) => {

  const res = await fetch("http://localhost:3000/api/Trabajadores");
  const trabajadores = await res.json()

  return{
    props:{
      trabajadores
    }
  }
}
