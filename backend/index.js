const express = require('express');
const  conectarDB = require('./config/db');

// crear el server
const app = express();

// Conectar a la base de datos 
conectarDB();

// habilitar express.json 
app.use(express.json({extended: true}));



// puerto de la app
const PORT = process.env.PORT || 4000;

//Importar rutas 
app.use('/api/recicladores', require('./routes/recicladores'));
app.use('/api/auth', require('./routes/auth'));


// arrancar el servidor 
app.listen(PORT, ()=>{
    console.log(`El servidor esta funcionando en el puerto ${PORT}`);
})