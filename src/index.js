const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT,() => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    //bad code alert
    //const {City,Airport}=require('./models');
    //const bengaluru=await City.findByPk(1);
    //console.log(bengaluru);
    //const kmairport=await bengaluru.createAirport({name:'Kempegowda Airport', code: 'BLR'});
    //console.log(kmairport);
    //const city=await City.findByPk(4);
    //await city.createAirport({name:'Indore airport',code: 'IND'});
    ///await City.destroy({
        //where:{
           // id:4
        //}
    //});
});

