import { dbConnect } from "utils/mongoose";
import Trabajador from "models/Trabajadores";

dbConnect();

export default async (req, res) => {
  
  const {method, body, query:{id}}= req

  switch (method) {
    case "GET":
      try {
        const trabajador = await Trabajador.findById(id);
        if (!trabajador)
          return res.status(404).json({ msg: "Trabajador no encontrado" });
        return res.status(200).json(trabajador);
      } catch (error) {
        return res.status(500).json({msg:error.message});
      }
    case "PUT":
      try {
        const trabajador = await Trabajador.findByIdAndUpdate(id,body,{
          new:true,
        });
        if(!trabajador)
          return res.status(404).json({msg:"Trabajador no encontrado"});
        return res.status(200).json(trabajador);
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }
    case "DELETE":
      try {
        const deletedTrabajador = await Trabajador.findByIdAndDelete(id);
        if(!deletedTrabajador)
          return res.status(404).json({msg: "Trabajador no encontrado"});
        return res.status(204).json();
      } catch (error) {
        return res.status(400).json({msg:error.message});
      }
    default:
      return res.status(400).json({ msg: "este metodo no es soportado" });
  }
};
