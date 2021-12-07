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
      <div className="container flex justify-center mx-auto">
        <div className="flex flex-col">
          <table className="table text-gray-900 border-separate border border-green-800 space-y-2 p-4 ">
            <thead className="text-gray-900 text-lg font-bold text-center bg-gray-50">
              <tr>
                <th className="px-3 ">Fecha de creacion</th>
                <th className="px-3 ">Fecha de actualizacion</th>
                <th className="px-3 ">Nombre</th>
                <th className="px-3 ">Apellido</th>
                <th className="px-3 ">edad</th>
                <th className="px-3 ">Area de trabajo</th>
                <th className="px-3 ">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {trabajadores.map((trabajador) => (
                <tr key={trabajador._id}>
                  <td className="px-3 ">{trabajador.createdAt}</td>
                  <td className="px-3 ">{trabajador.updatedAt}</td>
                  <td className="px-3 ">{trabajador.nombre}</td>
                  <td className="px-3 ">{trabajador.apellido}</td>
                  <td className="px-3 ">{trabajador.edad}</td>
                  <td className="px-3 ">{trabajador.area_trabajo}</td>
                  <td className="inline-flex space-x-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded">
                      Editar
                    </button>

                    <button
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 rounded"
                      onClick={() => router.push("/dashboard")}
                    >
                      Ver dispositivos
                    </button>
                    <button 
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded"
                    onClick={() =>{ console.log(trabajador._id)}}
                    >
                      Eliminar
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
