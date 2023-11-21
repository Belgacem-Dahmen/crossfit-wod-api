const express = require('express')
const router = express.Router()
const workoutController = require('../../v1/controllers/workoutController')

router.get('/', workoutController.getAllWorkouts);
router.get('/:id', workoutController.getWorkout)
router.post('/', workoutController.createWorkout)
router.put('/:id', workoutController.updateWorkout)
router.delete('/:id', workoutController.deleteWorkout)

module.exports = router;