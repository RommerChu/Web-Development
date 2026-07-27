import express from "express";
import bodyParser from "body-parser";
//import logger from "logger";

const app = express();
const port = 3000;

//Custom MIDDLEWARE - Create 'Logger'
function logger(req, res, next) {
  console.log("Request Method: ", req.method);
  console.log("Request URL: ", req.url);
  next();
}

app.use(logger); //custom middleware

app.get("/", (req, res) => {
  res.send("Hello Rommer");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
