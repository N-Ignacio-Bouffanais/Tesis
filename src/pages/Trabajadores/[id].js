import Error from 'next/error'
import Layout from "../../components/Layout";
import Sidebar from "../../components/sidebar";
import Container from "../../components/Containers";

export default function TrabajadorDetalle({trabajador, error}) {

  if (error && error.statusCode)
    return<Error statusCode={error.status} title={error.statusText} />

  
  return (
    <div>
      <Layout></Layout>
      <div className="flex">
        <Sidebar />
        <div className="w-screen">
          <div className="flex w-full p-3 space-x-12 border-t-4 border-b-4 ">
            <div className="flex space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-gray-900 font-bold">Usuario:</p>
              <p>{trabajador.nombre} {trabajador.apellido}</p>
            </div>
            <div className="flex space-x-2">
              <p className="text-gray-900 font-bold">
                Número de identificación:
              </p>
              <p>{trabajador._id}</p>
            </div>
          </div>
          <Container />
        </div>
      </div>
    </div>
  );
};


export async function getServerSideProps({query:{id}}){
  
  const res = await fetch(`http://localhost:3000/api/Trabajadores/${id}`)

  if (res.status === 200){
    const trabajador = await res.json()
    return {
      props:{
        trabajador
      }
    }
  }

  return {
    props:{
      error:{
        statusCode: res.status,
        statusText: "Invalid ID",
      },
    }
  }
}


