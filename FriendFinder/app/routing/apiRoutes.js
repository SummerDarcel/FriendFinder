var friends = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

    app.post('/api/friends', function(req, res) {
        var userInput = req.body;
        var userScores = userInput.scores;
        var totalDiff = 100;

        for (var i = 0; i < friends.length; i++) {
            var diff = 0;
            for (var j = 0; j < userScores.length; j++) {
                diff += Math.abs(friends[i].scores[j] - userScores[j]);
            }
            if (diff < totalDiff) {
                totalDiff = diff;
                var match = friends[i];
            }
        }
        friends.push(userInput);
        res.json(match);
    });
};
