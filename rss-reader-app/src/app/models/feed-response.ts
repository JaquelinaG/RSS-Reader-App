import { FeedItem } from "./feed-item";
import { Feed } from "./feed";

export class FeedResponse {

    constructor(json? : any) {
        if(!json) {
            json = {};
        }

        this.status = json.status || "";
        this.feed = new Feed(json.feed);
        this.items = new Array<FeedItem>();

        if(json.items) {
            <Array<any>>json.items.forEach(i => {
                this.items.push(new FeedItem(i));                
            });
        }
    }

    status: string;
    feed: Feed;
    items: Array<FeedItem>;
}