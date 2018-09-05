const express= require('express');
const bodyParser= require('body-parser');
const massive= require ('massive');
const cors= require('cors');

require('dotenv').config();

const app= express();
const controller= require('./controller');


app.use( cors() );
app.use( bodyParser.json() );

massive( process.env.CONNECTION_STRING ).then(  dbInstance => {
    app.set('db', dbInstance)
    }).catch( err =>  console.log(err) );

app.get('/api/inventory', controller.getInventory)



const port = process.env.PORT || 8080
app.listen( port, ()=> console.log(`Server listening on port ${port}`) )

