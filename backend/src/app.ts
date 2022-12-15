import cors from 'cors';
import express from 'express';
import { usersRoute } from './routes/index';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/home', usersRoute);

export default app;