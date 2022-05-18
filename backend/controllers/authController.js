const Reciclador = require("../model/Recicladores");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

exports.autenticarReciclador = async (req, res) => {
  // Verificar errores de validacion

  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    res.status(400).json({ errores: errores.array() });
  }

 // Recuperar email y password del request.body
const {email,password} = req.body;
try {
    // verificar que sea un reciclador registrado
    let reciclador = await Reciclador.findOne({email});
    if (!usuario){
        return res.status(400).json({msg: 'El reciclador no esta registrado'});
    }

    // Verificar password del reciclador
    const passCorrecto = await bcryptjs.compare(password,reciclador.password);
    if(!passCorrecto){
        return res.status(400),json({msg: 'Contraseña Incorrecta'})
    }

    // Si todas la validaciones pasan se crea el JWT para

    // Generar el JWT token
    const payload = {
        reciclador: {
          id: reciclador.id,
        },
      };
  
      //firmar JWT token
      jwt.sign(
        payload,
        process.env.SECRETA,
        {
          expiresIn: 36000,
        },
        (error, token) => {
          if (error) throw error;
  
          //Mensaje de confirmacion
          res.json({ token });
        }
      );



} catch (error) {
    console.log(error);
}


};
