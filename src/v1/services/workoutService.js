const Workout = require('../database/Workout')
const {v4:uuid} = require('uuid')


const getAllWorkouts = () => {
    const allWorkouts = Workout.getAllWorkouts()
    return allWorkouts;
  };
  
  const getOneWorkout = (id) => {
    const workout =Workout.getOneWorkout(id)
    
    return workout;
  };
  
  const createNewWorkout = (newWorkout) => {

    const workoutToInsert = {
      ...newWorkout,
      id: uuid(),
      createdAt: new Date().toLocaleDateString("fr-FR", {timeZone : "UTC"}),
      updatedAt:  new Date().toLocaleDateString("fr-FR", {timeZone : "UTC"})}
    const createdWorkout = Workout.createNewWorkout(workoutToInsert)
    return createdWorkout;
  };
  
  const updateOneWorkout = () => {
    return;
  };
  
  const deleteOneWorkout = () => {
    return;
  };
  
  module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
  };