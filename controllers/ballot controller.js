const ballotController = {
   homeRoute: function (req, res) {
        res.render('home');
    },
    showBallotRoute: function (req, res) {
        res.render('ballot', {
            voterId: req.body.voterId,
            precinct: req.body.district
        });
    }
}

module.exports = ballotController