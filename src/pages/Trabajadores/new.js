import Form from "components/Form";
import Layout from "components/Layout";

const New = () => {
  const FormData = {
    nombre: "",
    apellido: "",
    edad: "",
    area_trabajo: "",
  };
  
  return (
    <div className="bg-blue-700 h-screen">
      <Layout></Layout>
      <div className="py-4 text-center">
        <h2 className="font-bold text-3xl text-white mt-2">Agregar nuevo trabajador</h2>
      </div>
      <div className="flex justify-center items-center h-3/4 py-4">
        <Form FormData={FormData} />
      </div>
    </div>
  );
}

export default New
