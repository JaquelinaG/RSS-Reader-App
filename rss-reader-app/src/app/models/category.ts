export class Category {

    constructor(json? : any) {
        if(!json) {
            json = {};
        }

        this.description = json.description || "";
    }

    description: string;
}