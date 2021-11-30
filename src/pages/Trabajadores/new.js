import Link from "next/link"
import Layout from "../../components/Layout";
import { useState } from "react"
import { useRouter } from "next/router";

const New = () => {
    
    const router = useRouter();

    const [form,setForm] = useState({
        nombre: "",
        apellido: "",
        edad: "",
        area_trabajo: ""
    })

    const handleChange = e => {
        const {value, name} = e.target
        setForm({
            ...form,
            [name]:value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        postData(form)
        await router.push("/");
    }

    const postData = async (form) => {
        try {
            console.log(form)
            const res = await fetch('/api/Trabajadores' ,{
                method: 'POST',
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(form)
            })
            const data = await res.json()
            console.log(data);

        } catch (error) {
            console.log(error)
        }
    }

    return (
      <div>
        <Layout></Layout>
        <div className="flex justify-center items-center h-3/4 py-4">
          <form className=" bg-gray-200 p-10" onSubmit={handleSubmit}>
            <h2 className="mb-7 text-3xl">Agregar trabajador</h2>
            <div className="mb-5">
              <input
                className="py-3 px-4 focus:text-gray-900 bg-white w-full"
                type="text"
                placeholder="Nombre"
                autoComplete="off"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
              />
            </div>
            <div className="mb-5">
              <input
                className="py-3 px-4 focus:text-gray-900 bg-white w-full"
                type="text"
                placeholder="Apellido"
                autoComplete="off"
                name="apellido"
                value={form.apellido}
                onChange={handleChange}
              />
            </div>
            <div className="mb-5">
              <input
                className="py-3 px-4 focus:text-gray-900 bg-white w-full"
                type="number"
                placeholder="Edad"
                autoComplete="off"
                name="edad"
                value={form.edad}
                onChange={handleChange}
              />
            </div>
            <div className="mb-5">
              <input
                className="py-3 px-4 focus:text-gray-900 bg-white w-full"
                type="text"
                placeholder="area de trabajo"
                autoComplete="off"
                name="area_trabajo"
                value={form.area_trabajo}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="bg-green-600 w-full hover:bg-grenn-500 py-2 px-4 mt-5 mb-5 text-white font-bold text-lg"
            >
              Guardar
            </button>
            <Link href="/">
              <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Volver...
              </a>
            </Link>
          </form>
        </div>
      </div>
    );
}

export default New
