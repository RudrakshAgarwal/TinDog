const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;

const app = express();

// EJS - Embedded JS Code
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get('/', function (req, res) {
    res.render("index");
});

app.listen(port, function (){
    console.log("Server started on port: " + port);
});