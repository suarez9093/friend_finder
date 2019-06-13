// Dependencies
// ===================================
let express = require("express");
let path = require("path");

// Express 
// ====================================
let app = express();
let PORT = 3001;


// Express app that handles data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Routes
// ============================================

app.get("/api/friends", function(){
    console.log("read");
})

app.post("/api/friends", function(){
    console.log("Create");
})

app.listen(PORT, function(){
    console.log("App listening on PORT: ", PORT);
})

