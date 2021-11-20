import mongoose from "mongoose";

const connectDB = async () => {
  return await mongoose
    .connect(
      "mongodb+srv://nairor:4029@adminproyects-tech5.zjqwk.mongodb.net/AdminProyectsDatabase?"
    )
    .then(() => {
      console.log("Conexion Exitosa");
    })
    .catch((e) => {
      console.error("Error conectándose a la DB", e);
    });
};

export { connectDB };
