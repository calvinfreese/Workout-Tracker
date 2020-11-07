const router = require("express").Router();
let db = require("../models");

// find all
router.get("/api/workouts", function (req, res) {
   db.Workout.find({})
        .then(dbWorkouts => {
            console.log(dbWorkouts);
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//find all for stats.html (dashboard)
router.get("/api/workouts/range", function(req, res){
    db.Workout.find({})
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.status(400).json(err);
    });
})

// find one workout by ID
router.get("/api/workouts/:id", (req, res)=> {
    let workoutID = req.params.id;
    db.Workout.find({_id: workoutID})
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    });
});


// add one exercise
router.post("/api/workouts", function ({ body }, res) {
    console.log(body);
    db.Workout.create(body)
        .then(dbWorkouts => {
            console.log(dbWorkouts);
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
});

// identify document by _id, then push array of user input values to the exercises array.
router.put("/api/workouts/:id", function(req,res){
   db.Workout.updateOne(
       {_id: req.params.id},
       { $push: {exercises: req.body}},
       {new: true},
       function(err, results){
       if (err) throw err;
       res.json(results);
   });
});

module.exports = router;

