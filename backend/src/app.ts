import cors from 'cors';
import express from 'express';
import userRouter from './routes/user.routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/users', userRouter);
export default app;