//ruta para autenticar usuarios
const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
const authController = require('../controllers/authController');


// Crear Usuarios recicladores
// api/auth

router.post('/', 
[
    check('email','Ingresa un Email valido').isEmail(),
    check('password','El password debe tener una longitud minima de 8 caracteres').isLength({min:8})
],
authController.autenticarReciclador
);

module.exports=router;