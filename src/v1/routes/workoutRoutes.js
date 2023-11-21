const express = require('express')
const router = express.Router()

router.get('/',(req,res) => {
    res.send("Get all workouts");
  });

  router.get('/:id',(req,res) => {
    res.send("Get one Workout");
  })

  router.post('/',(req,res) => {
    res.send("Create Workout");
  })
  router.put('/:id',(req,res) => {
    res.send("update Workout")
  })
  router.delete('/:id',(req,res) => {
    res.send("delete workout")
  })
  module.exports = router;