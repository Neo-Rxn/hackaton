//ruta para crear usuarios recicladores
const express = require('express');
const router = express.Router();
const recicladorController = require('../controllers/recicladorController');
const {check} = require('express-validator');



// Crear Usuarios recicladores
// api/recicladores

router.post('/', 
[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('email','Ingresa un Email valido').isEmail(),
    check('password','El password debe tener una longitud minima de 8 caracteres').isLength({min:8})
],

recicladorController.crearRecolector
);

module.exports=router;