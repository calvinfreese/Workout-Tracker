const express = require("express");
const mongoose = require("mongoose");
let db = require("./models");


const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// must include public ..or else! it won't work.
app.use(express.static("public"));

// Connection line to our mongodb database
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/workoutsdb",
 { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false

 }
);

// require in api and html routing
app.use(require("./routes/api-routes.js"));
require("./routes/html-routes.js")(app);



app.listen(PORT, function () {
    console.log("Server listening on http://localhost:" + PORT);
});
