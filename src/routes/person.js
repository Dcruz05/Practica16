let express = require('express');
let router = express.Router(); //usamos export.Router para solo usar router para hacer ruteo

router.get('/person',(req, res) => {
    res.send("Haz solicitado el listado de personas") // para verificar que se esta mandando bien la informacion usamos person
});

module.exports = router; //exportamos el router para poder acceder a la ruta en server.js