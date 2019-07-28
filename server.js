// Dependencies
// ==============================================
const express = require("express");
const path = require("path");
const parse = require("body-parser");
const friends = require("./app/data/friends")

// Express
// ===============================================
const app = express();
const PORT = process.env.PORT || 3000;

// Express app that handles data parsing
app.use(parse.urlencoded({ extended: true }));
app.use(parse.json());
app.use(parse.text());
app.use(parse.json({type: "application/vnd.api+json"})); 

app.use(express.static("app/public"))


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


app.listen(PORT, () => console.log("App listening on PORT:", PORT));
