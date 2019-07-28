// Dependencies
let path = require("path");
let friends = require("../data/friends");


module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        let totalDifference = 0;
        let bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };
        let userData = req.body;
        let userName = userData.name;
        let userScore = userData.scores;

        let b = userScore.map(function(item){
            return parseInt(item, 10);
        });
        userData = {
            name: req.body.name,
            photo: req.body.photo,
            scores: b
        };

        console.log("Name: " + userName);
        console.log("User Score: " + userScore);

        let sum = b.reduce((a,b) => a + b, 0);
        console.log("Sum of user score: " + sum);
        console.log("Best Match: " + bestMatch.friendDifference);
        console.log("======================================");
        for(let i = 0; i < friends.length; i++){
            console.log(friends[i].name);
            totalDifference = 0;
            console.log("Total Diff " + totalDifference);
            console.log("Best match friend diff " +bestMatch.friendDifference);

            let bfriendScore = friends[i].scores.reduce((a,b) => a +b, 0);
            console.log("Total friend Score" + bfriendScore);
            totalDifference += Math.abs(sum - bfriendScore);
            console.log("==============================" + totalDifference);

            if(totalDifference <= bestMatch.friendDifference){
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendDifference = totalDifference;
            }
            console.log(totalDifference + "Total Difference");
        }
        console.log(bestMatch);
        friends.push(userData);
        console.log("User added" + userData);
        res.json(bestMatch)
        
    });
};









