const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//Models
const db = require("./app/models");

const app = express();

let whitelist = [
    'http://localhost:8080'
];

let corsOption = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowerd by CORS'))
        }
    }
}
app.use(cors(corsOption));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//Synce dayabase
db.sequelize.sync();

app.get("/", (req, res) => {
    res.json({
        message: "WelcOme to ExMySQL"
    });

});

//Posts Routes
require("./app/routes/post.routes")(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})