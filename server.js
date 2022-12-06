import express  from "express";
import cors from "cors";
import dotenv from "dotenv";
import MainRouteDAO from "./dao/mainRouteDao"

//dotenv configurition
dotenv.config({path: "./config/.env"})

const app = express()

//Cors setup
app.use(cors({
    origin:(origin,callback) => callback(null,true),
    credentials: true
}))

// Static folder || React files
app.use(express.static("frondend"))

//Setup routes
app.use("/", MainRouteDAO)


app.listen(process.env.PORT, ()=>{
    console.log("Server is running, you better catch it")
})

