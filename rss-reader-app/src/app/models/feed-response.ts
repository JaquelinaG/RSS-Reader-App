import { FeedItem } from "./feed-item";
import { Feed } from "./feed";

export class FeedResponse {

    constructor(json? : any) {
        if(!json) {
            json = {};
        }

        this.title = json.title || "";
        this.description = json.description || "";// new Feed(json.feed);
        this.generator = json.generator || "";
        this.link = json.link || "";
        this.language = json.language || "";
        this.lastBuildDate = new Date(json.lastBuildDate) || null;
        
        this.items = new Array<FeedItem>();

        if(json.items) {
            <Array<any>>json.items.forEach(i => {
                this.items.push(new FeedItem(i));                
            });
        }
    }

    title: string;
    description: string;
    generator: string;
    link: string;
    language: string;
    lastBuildDate: Date;
    // status: string;
    // feed: Feed;
    image: string;
    items: Array<FeedItem>;
}