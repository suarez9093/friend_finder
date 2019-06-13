// Dependencies
// ==============================================
let express = require("express");
let path = require("path");

// Express
// ===============================================
let app = express();
let PORT = 3000;

// Express app that handles data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Data
// ==================================================
// let friends = [{
//     name: "",
//     photo: "",
//     scores: []
// }]


// Routes
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
})

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    })


app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
})