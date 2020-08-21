const express = require('express')
const citiesController = require('../controllers/citiesController.js')
const router =express.Router()

router.route('/ciudades')
.get(citiesController.listarCiudades)
.post(citiesController.cargarCiudades)

router.route('/ciudades/:id')
.delete(citiesController.borrarCiudades)
.put(citiesController.modificarCiudades)


module.exports = router