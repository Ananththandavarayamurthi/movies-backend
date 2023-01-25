// const express = require("express"); type:common.js -> old method
import express from "express"; //type:module; -> latest method
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
import moviesRouter from "./routes/movies.route.js";
import cors from "cors";


dotenv.config();
const app = express();
const PORT = process.env.PORT;

// const MONGO_URL = "mongodb://127.0.0.1";
const MONGO_URL = process.env.MONGO_URL;

const client = new MongoClient(MONGO_URL);
await client.connect();
console.log("mongodb is connected");

const corsOptions = {
  origin: "*",
  credentials: true, 
  optionSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));
//localhost:4000 home
app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩 heelo world");
});


app.use("/movies/api", moviesRouter);


app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

export { client };
