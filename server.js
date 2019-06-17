// Dependencies
// ==============================================
let express = require("express");
let path = require("path");
let parse = require("body-parser");
let friends = require("./app/data/friends")

// Express
// ===============================================
let app = express();
let PORT = process.env.PORT || 3000;

// Express app that handles data parsing
app.use(parse.urlencoded({ extended: true }));
app.use(parse.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
})

