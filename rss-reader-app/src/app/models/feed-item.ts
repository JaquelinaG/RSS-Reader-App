import { Category } from "./category";

export class FeedItem {

    constructor(json? : any) {
        if(!json) {
            json = {};
        }
        
        this.title = json.title || "";
        this.pubDate = new Date(json.pubDate) || null;
        this.link = json.link || "";
        this.guid = json.url || "";
        this.author = json.author || "";
        this.thumbnail = json.thumbnail || "";
        this.description = json.description || "";
        this.content = json.content || "";
    }
    
    title: string;
    pubDate: Date;
    link: string;
    guid: string;
    author: string;
    thumbnail: string;
    description: string;
    content: string;
    enclosure: string;
    categories: Array<Category>;
}