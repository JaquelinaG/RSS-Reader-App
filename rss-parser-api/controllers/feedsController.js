// import Parser from 'rss-parser';

// function feedsController(Feed) {
//     function get(req, res){
//         let parser = new Parser();
 
// // (async () => {
 
//    let feed = parser.parseURL('https://www.reddit.com/.rss');
// //   console.log(feed.title);
 
// //   feed.items.forEach(item => {
// //     console.log(item.title + ':' + item.link)
// //   });
 
// // })();

//     }
// }

//ejemplo:
// const FEED_LIST = [
//   'https://css-tricks.com/feed/',
//   'https://codepen.io/posts/feed',
//   'https://blog.safia.rocks/rss',
//   'https://hnrss.org/frontpage',
//   'https://tj.ie/feed.rss',
//   'http://github-trends.ryotarai.info/rss/github_trends_javascript_daily.rss'
// ];

// app
//   .get('/', (req, res) => {
//     let parser = new Parser();

//     const feedRequests = FEED_LIST.map(feed => {
//       return parser.parseURL(feed);
//     })

//     Promise.all(feedRequests).then(response => {
//       res.setHeader('Access-Control-Allow-Origin', '*');
//       // res.setHeader('Access-Control-Allow-Origin', 'some-domain-to-allow.com');
//       res.header('Access-Control-Allow-Methods', 'GET');
//       res.json(response);
//     })
//   })
//   .listen(PORT, () => console.log(`Listening on ${PORT}`));

//doc rss-parse
// let parser = new Parser();
 
// (async () => {
 
//   let feed = await parser.parseURL('https://www.reddit.com/.rss');
//   console.log(feed.title);
 
//   feed.items.forEach(item => {
//     console.log(item.title + ':' + item.link)
//   });
 
// })();