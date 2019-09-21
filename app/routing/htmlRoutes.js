// Dependencies
// ==============================================
let path = require("path");


module.exports = function(app){
app.get("/",function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
})

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    })

    app.get("/friends", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/friends.html"));
    })

    app.get("/faq", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/faq.html"));
    })
}
