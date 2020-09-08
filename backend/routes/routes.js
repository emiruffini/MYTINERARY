const express = require('express')

const cityController = require('../controllers/cityController.js')
const itineraryController = require('../controllers/itineraryController.js')
const activitiesController = require('../controllers/activitiesController')
const userController = require('../controllers/userController')

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

router.route('/activities')
.get(activitiesController.getActivities)
.post(activitiesController.loadActivities)

router.route('/activities/:id')
.get(activitiesController.getActivitiesByItinerary)

router.route('/users')
.get(userController.getUser)
.post(userController.validateUser, userController.uploadUser)

router.route('/users/:id')
.delete(userController.deleteUser)
.put(userController.modifyUser)

router.route('/login')
.post(userController.logUser)


module.exports = router