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
        // console.log("New user: ", user);
        let user = req.body;

        // // User Name, photo and score info
        for (let i = 0; i < user.score.length; i++) {
            
            user.score[i] = parseInt(user.score[i]);
            console.log("User score: " + user.score[i]);
        }
        // Database of friends
            for (let i = 0; i < friends.length; i++) {
                console.log("Possible Friends: ", friends[i]);
                let friendScores = friends[i].scores;
                console.log("Friend Scores: " + friendScores);

            
            }


        
    })

}









