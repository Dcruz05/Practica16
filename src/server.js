let express=require('express'); //importamos express

//Rutas
let indexRoute = require('./routes/index');
let personsRoute = require('./routes/person');//definimos una variable para usar nuestra ruta que se encuentra en otra carpeta
let studentRoute = require('./routes/student');
let addStudentRoute = require('./routes/addStudent');

let app=express(); //Definimos una variable para usar express
let port=process.env.PORT || 3000; //

//Configuraciones
app.use('/assets', express.static(__dirname+'/public'));
app.use(express.urlencoded({extended: false})) // Esta linea de codigo hara que nos permita pasear en caso de no tenerla marcara error al momento de querer mostrar resultados
app.set('view engine', 'ejs'); // Usamos el motor de vistas ejs para poder mostrar nuestras views
app.use('/',(req, res, next) => {
    console.log('Request URL:' + req.url);
    next()
});

//Redireccion
app.use(indexRoute) //Index Route
app.use(personsRoute); // Llamamos a la variable que seleccionamos para mostrar una route (TEST)
app.use(studentRoute); // llamamos el rotuer de student y addStudent para poder usarlos desde nuestro server
app.use(addStudentRoute); //displayData route

app.listen(port); // Inicamos el server


