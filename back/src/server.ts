import express from 'express'; 
import { router } from './routes/index';
import morgan from 'morgan';
import "reflect-metadata"; 

const app = express(); 
app.use(express.json()); 
app.use(morgan('dev'))
app.use(router); 

export default app; 