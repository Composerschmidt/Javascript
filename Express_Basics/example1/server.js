//This is requiring express:
let express = require("express");
// setting a variable to call express:
let app = express();

//requiring path (path is a part of express):
const path = require('path');

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

//setting our static content, routing it, this will require a static folder in the current directory:
app.use(express.static(path.join(__dirname, 'static')));
console.log("The current director name is", __dirname);

// setting where the server can looks for our views:
app.set('views', path.join(__dirname, 'views'));

// setting the view engine to use EJS(embeded Javascript):
app.set('view engine', 'ejs');

let routes = require('./server/config/routes.js');
routes(app);

app.listen(6789, function() {
    console.log("Listening on 6789");
});
// You can also do:
// app.listen(6789, () => console.log("Listening on 6789"));
// the => is typescript that stands for an anonymous function.
