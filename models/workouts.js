let mongoose = require("mongoose");


const schema = new mongoose.Schema({ 
    day: {
        type: Date,
        required: true,
        default: Date.now
    }, 
    exercises: [ 
        {
            type: {
                type: String
            }, 
            name: {
                type: String
            },
            distance: {
                type: String
            },
            duration: {
                type: Number
            }, 
            weight: {
                type: Number
            }, 
            reps: {
                type: Number
            }, 
            sets: {
                type: Number
            } 
        }
    ]
    },
        {
            toJSON: {
                virtuals: true
            }
      
        });
    
    schema.virtual("totalDuration").get(function(){
        return this.exercises.reduce( (total, exercise ) => {
            return total + exercise.duration;
        }, 0)
    });


const Workout = mongoose.model("Workout", schema);


module.exports = Workout;