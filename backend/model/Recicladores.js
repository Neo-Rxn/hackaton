const mongoose = require("mongoose");
const RecicladoresSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },

  direccion: {
    type: String,
    required: true,
    trim: true,
  },

  telefono: {
    type: Number,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },

  identificacion: {
    type: Number,
    required: true,
    trim: true,
  },

  tipoResiduo: {
    type: String,
    required: true,
    trim: true,
  },

  capacidadRec: {
    type: Number,
    required: true,
    trim: true,
  },

  vehiculo: {
    type: String,
    required: true,
    trim: true,
  },

  tipoVehiculo: {
    type: String,
    required: true,
    trim: true,
  },

  registro: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Recicladores', RecicladoresSchema);