const express = require("express");
const mongoose = require("mongoose");
let db = require("./models");


const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutsdb", { useNewUrlParser: true });

app.use(require("./routes/api-routes.js"));
require("./routes/html-routes.js")(app);



app.listen(PORT, function () {
    console.log("Server listening on http://localhost:" + PORT);
});
