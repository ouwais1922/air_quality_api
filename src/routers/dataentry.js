import express from "express"
import { getAllDataEntry } from "../controllers/dataEntryController.js"
const apiRouter = express.Router()

apiRouter.get('/',getAllDataEntry)
export default apiRouter