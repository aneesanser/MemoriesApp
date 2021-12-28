import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import express from "express";
import postRoutes from "./routes/posts.js"


const app = express();



app.use(bodyParser.json({limit:"30mb", extended:true}));

app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))

app.use(cors())

app.use("/posts",postRoutes)
const CONNECTION_URL = "mongodb+srv://anees:anees321@cluster0.x0qgr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT= process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL).then(()=>app.listen(PORT, ()=> 
      console.log(`Server running on port : ${PORT}`)) ).catch((e)=>console.log(e));
