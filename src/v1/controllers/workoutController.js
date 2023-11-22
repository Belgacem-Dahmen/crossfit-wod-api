
const workoutService = require('../services/workoutService')

const getAllWorkouts = (req,res) => {
    const allWorkouts = workoutService.getAllWorkouts()
    res.send({ status: "OK", data: allWorkouts })
}

const getWorkout = (req, res) => {
    const { id } = req.params
    const workout = workoutService.getOneWorkout(id)
        res.send({ status: "OK", data: workout })
    

}
const createWorkout = (req,res) => {
    const { body } =  req ; 
        if (
            !body.name || 
            !body.mode ||
            !body.equipment ||
            !body.exercises ||
            !body.trainerTips
        ) { res.status(404).send({message : "add some values"})} 
        else {
            const newWorkout = {
                name : body.name,
                mode : body.mode,
                equipment : body.equipment,
                exercises : body.exercises,
                trainerTips : body.trainerTips
            }
            const workout = workoutService.createNewWorkout(newWorkout)
            res.status(201).send({ status: "OK", data: workout });
        }
        
    }

    


const deleteWorkout = (req,res) => {
    const workout = workoutService.deleteWorkout()
    res.send('delete a workout')
}

const updateWorkout = (req,res) => {
    workoutService.updateWorkout()
    res.send('update a workout')
} 


module.exports = {
    getAllWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}