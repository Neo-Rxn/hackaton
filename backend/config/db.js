const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });

const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado a la DB");
  } catch (error) {
    console.log(error);
    process.exit(1); // detiene la app al existir un error de conexion
  }
};

module.exports = conectarDB;
