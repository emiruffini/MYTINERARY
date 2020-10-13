const express = require('express')
const passport = require('../config/passport')
const cityController = require('../controllers/cityController.js')
const itineraryController = require('../controllers/itineraryController.js')
const activitiesController = require('../controllers/activitiesController')
const userController = require('../controllers/userController')

const router =express.Router()

router.route('/cities')
.get(cityController.getCities)//Ruta para obtener ciudades
.post(cityController.loadCities)//Ruta para cargar ciudades

router.route('/cities/:id')
.delete(cityController.deleteCities)// Ruta para borrar una ciudad
.put(cityController.modifyCities)// Ruta para modificar una ciudad




router.route('/itineraries')
.get(itineraryController.getItineraries)//Ruta para obtener los itinerarios
.post(itineraryController.loadItineraries)//Ruta para subir un itinerario

router.route('/itineraries/:id')
.get(itineraryController.getItinerary)//Ruta para obtener itinerarios mediante el id de la ciudad
.put(passport.authenticate('jwt', {session: false}), itineraryController.LikeItineraries)// Ruta para likear un itinerario

router.route('/itinerary/:id')
.get(itineraryController.getCommentsByItineraryId)//Ruta para obtener los comentarios mediante el id de itinerario
.post(passport.authenticate('jwt', {session: false}), itineraryController.commentItinerary)//Ruta para comentar un itinerario


router.route("/comment/:id")
.delete(itineraryController.deleteComment)//Ruta para borrar un comentario

router.route('/validateToken')
.get(passport.authenticate('jwt', {session: false}), userController.validateToken)//Ruta para validar la sesion del usuario

router.route('/activities')
.get(activitiesController.getActivities)//Ruta para obtener las actividades 
.post(activitiesController.loadActivities)//Ruta para subir una actividad

router.route('/activities/:id')
.get(activitiesController.getActivitiesByItinerary)//Ruta para obtener las actividades de un itinerario puntual


router.route('/user')
.get(passport.authenticate('jwt', {session: false}), userController.getLikes)//Ruta  para obtener los likes del usuario

router.route('/users')
.get(userController.getUser)//Ruta para obtener los usuarios
.post(userController.validateUser, userController.uploadUser)//Ruta para cargar un usuario 

router.route('/users/:id')
.delete(userController.deleteUser)//Ruta para borrar un usuario
.put(userController.modifyUser)//Ruta para modificar un usuario



router.route('/login')
.post(userController.logUser)//Ruta para logear un usuario

router.route('/getUser')
.post(userController.getUsersExist)//Ruta para obtener si un usuario existe

module.exports = router