import express from 'express';
import cors from 'cors';

import loggerMiddleware from './middlewares/logger';

const app = express();

app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);

app.get('/health', (req, res) => {
    res.sendStatus(200);
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on http://localhost:3000');
});
