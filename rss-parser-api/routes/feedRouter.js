/* eslint-disable no-param-reassign */
import express from 'express';
import feedsController from '../controllers/feedsController';

function routes() {
    const feedRouter = express.Router();
    const controller = feedsController();

    feedRouter.use('/feeds', (req, res, next)=>{
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    feedRouter.route('/feeds').get(controller.get);
       
    return feedRouter;
}

module.exports = routes;