const Reciclador = require("../model/Recicladores");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

exports.crearRecolector = async (req, res) => {
  // Verificar errores de validacion

  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    res.status(400).json({ errores: errores.array() });
  }

  // leer el email y el password del usuario

  const { email, password } = req.body;
  try {
    let reciclador = await Reciclador.findOne({ email });
    if (usuario) {
      return res.status(400).json({ msg: "El reciclador ya existe" });
    }

    // crea el nuevo reciclador

    reciclador = new Reciclador(req.body);

    // encriptar el password delreciclador
    const salt = await bcryptjs.genSalt(10);
    reciclador.password = await bcryptjs.hash(password, salt);

    // guardo el reciclador con el password encriptado
    await reciclador.save();

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

    // Mensaje de Confirmación
    res.json({ msg: "Reciclador creado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).send("hubo un error");
  }
};
