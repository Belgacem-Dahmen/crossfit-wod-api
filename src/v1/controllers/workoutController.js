
const workoutService = require('../services/workoutService')

const getAllWorkouts = (req,res) => {
    const allWorkouts = workoutService.getAllWorkouts()
    res.send({ status: "OK", data: allWorkouts })
}

const getWorkout = (req,res) => {
    const workout = workoutService.getOneWorkout()
    res.send('get one workout')
}
const createWorkout = (req,res) => {
    const workout = workoutService.createWorkout()
    res.send('create a workout')
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