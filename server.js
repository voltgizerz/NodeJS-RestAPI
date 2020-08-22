const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

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

app.get("/", (req, res) => {
    res.json({
        message: "WelcOme to ExMySQL"
    });

});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})