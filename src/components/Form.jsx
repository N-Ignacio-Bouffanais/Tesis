import React from 'react'
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const Form = ({FormData, FormNewTrabajador = true}) => {

    const router = useRouter();

    const [form, setForm] = useState({
      nombre: FormData.nombre,
      apellido: FormData.apellido ,
      edad: FormData.edad,
      area_trabajo: FormData.area_trabajo,
    });

    const handleChange = (e) => {
      const { value, name } = e.target;
      setForm({
        ...form,
        [name]: value,
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      if(FormNewTrabajador){
          postData(form);
      } else{
          // editar data
      }
      await router.push("/");
    };

    const postData = async (form) => {
      try {
        console.log(form);
        const res = await fetch("/api/Trabajadores", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(form),
        });
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <form
        className=" bg-gray-800 p-10 w-4/12 rounded border-4 border-white"
        onSubmit={handleSubmit}
      >
        <div className="mb-5 ">
          <input
            className="py-3 px-4 focus:text-gray-900 bg-white w-full rounded text-lg"
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
            className="py-3 px-4 focus:text-gray-900 bg-white w-full rounded text-lg"
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
            className="py-3 px-4 focus:text-gray-900 bg-white w-full rounded text-lg"
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
            className="py-3 px-4 focus:text-gray-900 bg-white w-full rounded text-lg"
            type="text"
            placeholder="Area de trabajo"
            autoComplete="off"
            name="area_trabajo"
            value={form.area_trabajo}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 w-full hover:bg-green-700 py-2 px-4 mt-2 mb-5 text-white font-bold text-lg rounded"
        >
          Guardar
        </button>
        <Link href="/">
          <a className=" bg-yellow-500 hover:bg-yellow-700 text-white font-bold text-lg py-3 px-4 rounded ">
            Volver...
          </a>
        </Link>
      </form>
    );
}

export default Form
