let express = require('express');//iniciamos express
let router = express.Router(); //Usamos el Router de express para poder usar este archivo fuera

router.get('/student',  (req, res) => {
    res.render('student'); // creamos una nueva vista ejs para recibir datos
});

module.exports = router;