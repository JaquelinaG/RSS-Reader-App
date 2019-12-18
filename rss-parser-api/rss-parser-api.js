import express from 'express';
import feedRouter from './routes/feedRouter';

const app = express();

const port = process.env.PORT || 3000;

app.use('/api', feedRouter());

app.get('/', (req, res) => {
    res.send('Welcome to my RSS Parser API!');
});

app.server = app.listen(port, () => {
    console.log(`Running on port ${port}`);
});

module.exports = app;