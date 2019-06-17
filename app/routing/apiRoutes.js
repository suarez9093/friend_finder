// Dependencies
let path = require("path");
let friends = require("../data/friends")

let totalDifference = 0;

// 

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    })

    app.post("/api/friends", function (req, res) {
        // friends.push(req.body);;
        let user = req.body
        console.log("New user: ", user);

        // User Name, photo and score info
        for (i = 0; i < user.length; i++) {
            let userScore = parseInt(user[i].scores);
            console.log("User scores: " + userScore);
        }
        // Database of friends
            for (i = 0; i < friends.length; i++) {
                console.log("Possible Friends: ", friends[i]);
                let friendScores = friends[i].scores;
                console.log("Friend Scores: " + friendScores);

            
            }


        
    })

}









