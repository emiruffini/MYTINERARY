const Activity = require('../models/activitiesModel')


const ActivitiesController = {
  //Controlador para obtener todas las actividades
    getActivities: async (req, res) =>{
        try{
            const data = await Activity.find()
            res.json({
                success: true,
                response:data})
        }catch{
            res.json({
                success: false,
                response:"Error loading activities"})
        }
    },
    //Controlador para obtener las actividades de un determinado itinerario
    getActivitiesByItinerary: async (req, res) =>{
        var id = req.params.id
        try{
            var activities = await Activity.find({itineraryId:id})
            
            res.json({
                success: true,
                response: activities
            })   
        }catch{
            res.json({
                success: false,
                response: "Failed to get Activities"
            })
        }
    },
    //Controlador para cargar una actividad
    loadActivities: async (req, res) => {
        var {name, photoName, itineraryId} = req.body
        const newActivity = new Activity({
            name, 
            photoName,
            itineraryId
        })
        try{
            const savedActivity = newActivity.save()
            res.json({
                success: true,
                response: "City loaded successfuly"
            })
        }catch {
            res.json({
                succsess:false,
                response: "failed loading activity"
            })
        }
    }
}

module.exports = ActivitiesController