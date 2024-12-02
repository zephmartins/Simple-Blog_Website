import express from "express";
import mainPage from "./server/routes/main.route.js"
import "dotenv/config";
import connectDB from  "./server/config/db.js";
import expressLayouts from "express-ejs-layouts";
import bodyParser from "body-parser";
import methodOverride from "method-override"

const app = express();
const port = 3000;



// connects data to datbase
connectDB();

// Static folder template
app.use(express.static("public"));

// Templating Engine
app.use(expressLayouts);
app.set("layout", "./layouts/main"); // let this be our layout 
app.set("view engine", "ejs"); // let this be our view engine


// To pass data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// to override post methods
app.use(methodOverride('_method'))

//Routes
app.use("/", mainPage)

app.listen(port, ()=>{
console.log(`App is listening on port ${port}`)
})