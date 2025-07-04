import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import { connectDB } from './config/db';
import loggerMiddleware from './middlewares/logger';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);

app.get('/health', (req, res) => {
    res.sendStatus(200);
});

app.listen(process.env.PORT || 3000, () => {
    connectDB();
    console.log('Server is running on http://localhost:3000');
});
