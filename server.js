import express  from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import formControl from "./form/formControl.js";
import { fileURLToPath } from "url";


// __Firname __dirname 
const __filename =  fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

//dotenv configurition
dotenv.config({path: "./config/.env"})

//Connect to Database
// connectDB() 

const app = express()

//Cors setup
app.use(cors({
    origin:(origin,callback) => callback(null,true),
    credentials: true
}))

// Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static folder || React files
app.use(express.static("frontend/build"))

//Setup routes
app.use("/api/form", formControl)

app.use("/api/sitemap.xml", (_, res) =>{
    res.sendFile(path.join(__dirname, "sitemap.xml"));
})

app.use("*",(_, res)=>{
    res.sendFile(path.join(__dirname, 'frontend/build/index.html'));
} )


app.listen(process.env.PORT, ()=>{
    console.log("Server is running, you better catch it")
})

