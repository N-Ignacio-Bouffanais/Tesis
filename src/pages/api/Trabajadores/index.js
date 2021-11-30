import {dbConnect} from 'utils/mongoose'
import Trabajador from "models/Trabajadores";

export default async function handler(req, res) {

  await dbConnect();

  const {method} = req

  switch (method) {
    case "GET":
      try {
        const trabajadores = await Trabajador.find();
        return res.status(200).json(trabajadores);
      } catch (error) {
        return res.status(500).json({error: error.message});
      }
    
    case "POST":
      try {
        const newTrabajador = new Trabajador(req.body);
        await newTrabajador.save();
        return res.status(201).json(newTrabajador);
      } catch (error) {
        return res.status(500).json({error: error.message});
      }

    default:
      return res.status(400).json({msg:"este metodo no es soportado"});
  }
  
}
