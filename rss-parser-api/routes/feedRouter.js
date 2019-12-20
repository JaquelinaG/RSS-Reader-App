/* eslint-disable no-param-reassign */

import express from 'express';
import Parser from 'rss-parser';
//import feedsController from '../controllers/feedsController';
const feedsController = require('../controllers/feedsController');

function routes() {
    const feedRouter = express.Router();
    //let parser = new Parser();
    //const controller = feedsController();

    feedRouter.use('/feeds', (req, res, next)=>{
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    feedRouter.route('/feeds')//.get(controller.get);
        .get((req, res) => {
            let category = "";
            let response = {};
            if (req.query.category) {
                category = req.query.category;
            } else {
                
            }

            let feed = parser.parseURL(`http://feeds.feedburner.com/TechCrunch/${category}`, (err, feed) => {
                console.log("Pasoooo");

                response = feed;
                res.json(response);
            });
        });

    return feedRouter;
}

module.exports = routes;