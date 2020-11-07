let path = require("path");


module.exports = (app) => {
    // at root, send index.html
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    
    // at /exercise path, send exercise.html
    app.get("/exercise", (req, res)=> {
        res.sendFile(path.join(__dirname,"../public/exercise.html"));
    });

    // at /stats path, send stats.html
    app.get("/stats", (req, res)=> {
        res.sendFile(path.join(__dirname,"../public/stats.html"));
    });
}   