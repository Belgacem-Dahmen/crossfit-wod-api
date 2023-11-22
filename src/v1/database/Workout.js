const DB = require('./db.json')
const { saveToDatabase } = require("./utils");

const getAllWorkouts = () => {
    return DB.workouts
}

const createNewWorkout = (newWorkout) => {
    const isAlreadyAdded = DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
    if  (isAlreadyAdded) {
        retun ;
    }
    DB.workouts.push(newWorkout);
    saveToDatabase(DB);
    return newWorkout;

}

const getOneWorkout = (id) => {
    const workout = DB.workouts.find((workout) => workout.id === id)
    if (!workout) {
        return ;
    }
    return workout;
}
module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout
}