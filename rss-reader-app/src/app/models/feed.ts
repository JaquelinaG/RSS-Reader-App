export class Feed {

    constructor(json? : any) {
        if(!json) {
            json = {};
        }

        this.url = json.url || "";
        this.title = json.title || "";
        this.link = json.link || "";
        this.author = json.author || "";
        this.description = json.description || "";
        this.image = json.image || "";
    }

    url: string;
    title: string;
    link: string;
    author: string;
    description: string;
    image: string;
}