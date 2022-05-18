const Acopio = require('../model/Acopio');



exports.crearRecolector = async (req,res) =>{
    try {
        let acopio;
        // crea el nuevo reciclador
        acopio = new Acopio(req.body);
        await acopio.save();

        res.send('Acopio creado exitosamente');
    } catch (error) {
        console.log(error);
        res.status(400).send('hubo un error al crear el Acopio');
        
    }
}