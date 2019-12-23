import Parser from 'rss-parser';

function feedsController() {
    function get(req, res) {
        let parser = new Parser();
        let category = "";
        let response = {};

        if (req.query.category) {
            category = req.query.category;

            parser.parseURL(`http://feeds.feedburner.com/TechCrunch/${category}`, (err, feed) => {
                if (err) {
                    return res.send(err);
                }

                response = feed;
                return res.json(response);
            });
        } else {
            res.status(400);

            return res.send('Category is required');
        }
    }
    return { get };
}

export default feedsController;