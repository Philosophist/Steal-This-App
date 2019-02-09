//Dependencies
const axios = require("axios");

module.exports = function(app) {

    app.get("/locationcall/:lon/:lat/:subject", function(req, res) {
        axios.get("https://api.meetup.com/find/upcoming_events?"+
        "key=23503015697c4721434d585a5e112637&sign=true&photo-host=public&"+
        "lon="+req.params.lon+"&topic_category="+req.params.subject+
        "&page=20&lat="+req.params.lat)
        .then((res) => console.log(res.data.events))
        .then(function (data) {
                res.status(200).end();
            }).catch(function(err) {
                // If an error occurs, send it back to the client
                res.json(err);
            });
        });
      // Render 404 page for any unmatched routes
    app.get("*", function(req, res) {
        res.render("404");
    });
}