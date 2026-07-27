import express from "express";
import bodyParser from "body-parser";
import {fileURLToPath} from "url";
import {dirname} from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var bandName = "";

//Mounting Body Parser
app.use(bodyParser.urlencoded({extended: true}));

//START - Band Name Generator
function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandName = req.body["street"] + " " + req.body["pet"];
  next();
}

app.use(bandNameGenerator);
//END Band Name Generator

////START GET, POST, PUT, PATCH, DELETE
app.get("/", (req, res) => {
  console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});
app.post("/submit", (req, res) => {
  res.send(`<h1>Your Band Name is: ${bandName}</h1>`);
});

//// LISTENING PORT
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
