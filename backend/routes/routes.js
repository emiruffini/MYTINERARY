const express = require('express')

const cityController = require('../controllers/cityController.js')
const itineraryController = require('../controllers/itineraryController.js')

const router =express.Router()

router.route('/cities')
.get(cityController.getCities)
.post(cityController.loadCities)

router.route('/cities/:id')
.delete(cityController.deleteCities)
.put(cityController.modifyCities)


router.route('/itineraries')
.get(itineraryController.getItineraries)
.post(itineraryController.loadItineraries)

router.route('/itineraries/:id')
.get(itineraryController.getItinerary)


module.exports = router