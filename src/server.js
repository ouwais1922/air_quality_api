import express from "express"
import dotenv from 'dotenv';
import applyGeneralMiddleware from "./utils/index.js";
import apiRouter from "./routers/dataentry.js";
import {checkDbConnection} from "./db/connect.js"
dotenv.config()
const app = express()
applyGeneralMiddleware(app)
app.use('/api/dataentry',apiRouter)
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on ${process.env.PORT}`);
    checkDbConnection();
})