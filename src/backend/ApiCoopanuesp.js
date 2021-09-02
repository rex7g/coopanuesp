const bodyParser=require('body-parser');
const  express= require('express');
const mongoose= require('mongoose');

const  appp =express();
mongoose.connect('mongodb://localhost/coopanuesp');

//ajustes
app.set('Port',process.env.PORT||3000)

mongoose.connect('RenatoMongoDB://localhost/coopanuesp'),
{
    useMongoClient=true
}



//INICIAR SERVIDORRES
app.listen(app.get('Port'),()=>{
    console.log("Servidor funcionando",app.get('Port'));
})
