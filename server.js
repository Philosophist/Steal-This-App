//Dependencies
const express = require("express")
const bodyParser = require("body-parser")
const session = require("express-session")
const app = express()
var PORT = process.env.PORT || 3000;

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname+'/public'));

var DateFormats = {
  short: "DD MMMM - YYYY",
  long: "MMM Do HH:mm"
};


// ===== Passport ====


/* Express app ROUTING */
//app.use('/auth', require('./controllers'));
require("./controller/routes")(app);

// ==== Starting Server =====
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})