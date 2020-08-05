const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const configMensaje = require('./configMensaje');
const messages = require('./messagesEvent');

const app = express();
app.use(bodyParser.json());
app.use(cors())

app.post('/formulario', (req, res) => {
    configMensaje(req.body);
    res.status(200).send();
});

app.get('/datos', (req, res) =>{
   messages();
   console.log('datos', messages());
   res.write("datos obtenidos");
   res.status(200).send();
 
});

app.listen(process.env.PORT || 3000, () => {
   console.log('Servidor corriendo')
});