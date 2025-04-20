const express = require('express');
const (CosmosClient)=require('@azure/cosmos');
const app = express(); 
const port = process.env.PORT || 3000;

//Configuracion de cosmos db
const cosmosClient= new CosmosClient(process.env.COSMOS_DB_CONNECTION_STRING);
const database=cosmoClient.database('academic-db');
const container=database.container('student');

app.use(express.json());
//ruta para insertar datos
app.post('/student',async(req,res)=>(
   try{
        const{body}=req;
        const{resource:createdItem}=await container.items.create(body);
        res.status(201).send(createdItem);
    catch(error){
        res.status(500).send(error);
    }
    
));

app.get('/students', (req, res) =>(
    try{
        const{resources}=await cotainer.items.readAll().fetchAll();
        res.status(200).send(resources);
    }catch(error){
        res.status(500).send(error);
    }
));


app.listen(port, ()=>{
    console.log('Aplicacion escuchando en el puerto: ',port)
});
