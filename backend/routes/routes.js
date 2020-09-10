const express = require('express')
const passport = require('../config/passport')
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
.get(itineraryController.getItinerary)//By city id
.put(passport.authenticate('jwt', {session: false}), itineraryController.LikeItineraries)

router.route('/itinerary/:id')
.get(itineraryController.getCommentsByItineraryId)
.post(passport.authenticate('jwt', {session: false}), itineraryController.commentItinerary)


router.route("/comment/:id")
.delete(itineraryController.deleteComment)

router.route('/validateToken')
.get(passport.authenticate('jwt', {session: false}), userController.validateToken)

router.route('/activities')
.get(activitiesController.getActivities)
.post(activitiesController.loadActivities)

router.route('/activities/:id')
.get(activitiesController.getActivitiesByItinerary)


router.route('/user')
.get(passport.authenticate('jwt', {session: false}), userController.getLikes)

router.route('/users')
.get(userController.getUser)
.post(userController.validateUser, userController.uploadUser)

router.route('/users/:id')
.delete(userController.deleteUser)
.put(userController.modifyUser)



router.route('/login')
.post(userController.logUser)


module.exports = router