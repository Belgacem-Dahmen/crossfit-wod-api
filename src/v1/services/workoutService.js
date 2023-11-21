const Workout = require('../database/Workout')



const getAllWorkouts = () => {
    const allWorkouts = Workout.getAllWorkouts()
    return allWorkouts;
  };
  
  const getOneWorkout = () => {
    const workout =Workout.getOneWorkout()
    return;
  };
  
  const createNewWorkout = () => {
    return;
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