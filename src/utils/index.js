import morgan from 'morgan';
import cors from 'cors';
import { json, urlencoded } from 'express';

const applyGeneralMiddleware = (expressApp)=>{
    expressApp.use(json())
    expressApp.use(urlencoded({extended: true}))
    expressApp.use(morgan(':method :url :status - :response-time ms'));
}

export default applyGeneralMiddleware