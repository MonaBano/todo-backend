import express from "express";
import "dotenv/config";
import cors from "cors";

import routes from "./src/routes/index.js";
import { connectToMongo } from "./src/config/mongoose.js"; 


const app = express();

//Middlewares
app.use(express.json());
app.use(cors());
app.use("/", routes);

const port = process.env.PORT || 5000;

try {
     await connectToMongo();
     app.listen(port, () => {
          console.log(`server is running on port: ${port}`);
     });
} catch (err) {
     console.log("err", err);
     throw err;
}

// app.listen(port, () => {
//      console.log(`server is running on port: ${port}`);
// });

