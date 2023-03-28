let express = require('express');//iniciamos express
let router = express.Router(); //Usamos el Router de express para poder usar este archivo fuera

router.get('/',  (req, res) => {
    res.render('index');
});

module.exports = router;