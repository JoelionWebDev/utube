require("dotenv").config();
const express = require("express");
const router = require("./server/router/routes");
const bodyParser = require("body-parser");
const connectDB = require("./server/database/connections");
const path = require("path");
const fs = require("fs");
const morgan = require("morgan");
const notFound = require("./middleware/not-found");
const errHandler = require("./middleware/error-handler");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//init view engine
//app.set("view engine", "ejs");

//CREATING A FILE TO STORE ALL THE TOKENS
const userTokenStore = fs.createWriteStream(
  path.join(__dirname, "userTokens.log"),
  { flags: "a" }
);
//init morgan
app.use(morgan("tiny", { stream: userTokenStore }));

//initialize router
app.use("/", router);

app.use(notFound);
app.use(errHandler);

const port = process.env.PORT || 5000;

//init connections as async function
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`server started in port = http://localhost:${port}`)
    );
  } catch (err) {
    console.log(err);
  }
};
start();
