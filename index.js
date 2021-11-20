import { ModeloProyecto } from './modelos/proyecto.js';
import { ModeloUsuario } from './modelos/usuario.js';
import { connectDB } from './db/db.js';

const main = async () => {
  await connectDB();

  const usuarioInicial = await ModeloUsuario.create({
    nombre: "Pedro",
    apellido: "Picapiedra",
    documento: "123456",
    correo: "pedro.pica@gmail.com",
    rol: ["ESTUDIANTE"],
    estatus: [ "AUTORIZADO"],
  });

  const proyectoCreado = await ModeloProyecto.create({
    nombre: "Proyecto 1",
    fechaInicio: new Date("2021/08/12"),
    fechaFinal: new Date("2021/12/20"),
    presupuesto: 300000,
    lider: usuarioInicial._id,
    objetivos: [
      {
        descripcion: "Este es el objetivo General del proyecto",
        tipo: ["GENERAL"],
      },
      {
        descripcion: "Este es el primer el objetivo Especifico del proyecto",
        tipo: ["ESPECIFICO"],
      },
      {
        descripcion: "Este es el segundo objetivo Especifico del proyecto",
        tipo: ["ESPECIFICO"],
      },
    ],
  });
};

main();
