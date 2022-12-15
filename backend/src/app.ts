import cors from 'cors';
import express from 'express';
import { chatsRoute, usersRoute } from './routes/index';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/home', usersRoute);
app.use('/chats', chatsRoute)

export default app;