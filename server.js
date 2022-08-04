require('dotenv').config() // libreria que configura nuestra app con las variables de entorno definidas en el archivo .env
require('./config/database') // conexion con base de datos
require('./config/passport') //LLamo al a config del passport

const passport = require('passport') // 
const express = require('express'); // llamo al modulo express
const app = express(); // ejecuto express
const cors = require('cors'); // permite intercambiar recursos entre dominios diferentes
const Router = require('./routes/routes') // importo mis rutas


// middlewares -- puente entre el sistema operativo y la api
app.use(cors()) // permite que se pueda efectuar la peticion de la api por el front
app.use(express.json()) // aplicar json al body del pedido
app.use(passport.initialize()) // inicializamos passport
app.use('/api', Router) // le asigno el nombre a mi ruta 


const PORT = process.env.PORT || 4000; //para que no haga conflicto con el 3000 que usa react


app.set('port', PORT)

app.get('/', (req, res) => {
    res.send('EL SERVIDOR ESTA FUNCIONANDO')
})


app.listen(app.get('port'), () => { //escucha el puerto seteado y lo levanta

    console.log('SERVIDOR CORRIENDO EN PUERTO: ' + app.get('port'));

});
