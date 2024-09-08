const express = require('express')
const Workout = require('../Models/WorkoutModel')


const router = express.Router()

//GET all Workouts
router.get('/', (req, res) => {
    res.json({mssg: "GET all Workouts"})
})

//GET a single workout
router.get('/:id', (req, res) => {
    res.json({mssg: "GET a single Workout"})
})

//POST a new workout
router.post('/',async (req, res) => {
    const{title, rebs, load} = req.body

    try{
        const workout = await Workout.create({title, reps, load})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    res.json({mssg: "POST a new workout"})
})

//DELETE a new workout
router.delete('/:id',(req, res) => {
    res.json({mssg: "DELETE a workout"})
})

//UPDATE a workout
router.patch('/:id',(req, res) => {
    res.json({mssg: "UPDATE a workout"})
})


module.exports = router