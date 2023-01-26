import express  from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path"
import { fileURLToPath } from "url";
import formRoute from "./form/formController"


// __Firname __dirname 
const __filename =  fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

//dotenv configurition
dotenv.config({path: "./config/.env"})

const app = express()

//Cors setup
app.use(cors({
    origin:(origin,callback) => callback(null,true),
    credentials: true
}))

// Static folder || React files
app.use(express.static("frontend"))

//Setup routes


app.use("/api/form", formRoute)
app.use("*",(_, res)=>{
    res.sendFile(path.join(__dirname, 'frontend/build/index.html'))
} )


app.listen(process.env.PORT, ()=>{
    console.log("Server is running, you better catch it")
})

