import {Schema,model,models} from 'mongoose';

const TrabajadorSchema = new Schema(
  {
    nombre: {
      type: String,
      required: [true, "El nombre de la persona es requerido"],
      maxlength: [15, "El nombre debe tener maximo 15 letras"],
      trim: true,
    },
    apellido: {
      type: String,
      required: true,
      maxlength: [25, "El apellido debe tener maximo 25 letras"],
      trim: true,
    },
    edad: {
      type: Number,
      required: true,
      maxlength: [3, "La edad no puede ser mayor a 3 digitos"],
      trim: true,
    },
    area_trabajo: {
      type: String,
      required: true,
      maxlength: [25, "Maximo:25 caracteres"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default models.Trabajador || model('Trabajador',TrabajadorSchema);