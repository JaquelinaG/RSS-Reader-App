export class FeedItem {

    constructor(json? : any) {
        if(!json) {
            json = {};
        }
        
        this.title = json.title || "";
        this.pubDate = new Date(json.pubDate) || null;
        this.link = json.link || "";
        this.guid = json.url || "";
        this.creator = json.creator || "";
        this.content = json.content || "";
        this.contentSnippet = json.contentSnippet || "";
        this.contentencoded = json.contentencoded || null;
        this.comments = json.comments || "";
        this.isoDate = new Date(json.isoDate) || null;
        
        this.categories = new Array<string>();
        if(json.categories) {
            <Array<any>>json.categories.array.forEach(c => {
                this.categories.push(c);
            });
        }        
    }
    
    title: string;
    pubDate: Date;
    link: string;
    guid: string;
    creator: string;
    content: string;
    contentSnippet: string;
    contentencoded: any;
    enclosure: string;
    categories: Array<string>;
    comments: string;
    isoDate: Date;    
}