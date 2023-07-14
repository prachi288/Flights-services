const {Sequelize}=require('sequelize');
const CrudRepository=require('./crud-repository');
const { Flight,Airplane,Airport,City }=require('../models');
const {Op}=require('sequelize');

class FlightRepository extends CrudRepository{
    constructor(){
        super(Flight);//using super you can call constructor of parent class
    }

    async getAllFlights(filter){
        const response=await Flight.findAll({
            where: filter,
            order: sort,
            include:[
                {
                  model: Airplane,
                  required: true,
                  as:'AirplaneDetail'
                },
                {
                  model: Airport,
                  required: true,
                  as: 'DepartureAirport',
                  on:{
                    col1: Sequelize.where(Sequelize.col("Flight.DepartureAirportId"),"=",Sequelize.col("DepartureAirport.code"))
                  },
                  include:{
                    model: City,
                    required: true
                  }
                },
                {
                  model: Airport,
                  required: true,
                  as: 'ArrivalAirport',
                  on:{
                    col1: Sequelize.where(Sequelize.col("Flight.ArrivalAirportId"),"=",Sequelize.col("ArrivalAirport.code"))
                  }
                }
            ] 
        });
        return response;
    }
}

module.exports=FlightRepository;