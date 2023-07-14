const express = require('express');

const { InfoController } = require('../../controllers');

const airplaneRoutes=require('./airplanes-routes');
const cityRoutes=require('./city-routes');
const airportRoutes=require('./airport-routes')
const flightRoutes=require('./flight-routes')

const router = express.Router();

console.log("inside v1 routes")

router.use('/airplanes', airplaneRoutes);
router.use('/cities', cityRoutes);
router.use('/airports', airportRoutes);
router.use('/flights', flightRoutes);

router.get('/info', InfoController.info);

module.exports = router;