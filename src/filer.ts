import fsPromises from "fs/promises";
import path from "path";
import { Kitten } from "./kitten-model";
class Filer{

    private readonly file = path.join(__dirname, "assets", "kittens.json")


    public async getAllKittens(){
        const content = await fsPromises.readFile(this.file, "utf-8");
        return JSON.parse(content)
    }

    public async saveAllKittens(kittens:Kitten[]){
        const content = JSON.stringify(kittens, null, 4);
        await fsPromises.writeFile(this.file, content)
    }


}

export const filer = new Filer();