import express, { Request, Response } from "express";
import { appConfig } from "./app-config";
import { filer } from "./filer";
import { Kitten } from "./kitten-model";

const server = express();

server.use(express.json()); ///request from given json

server.get("/", (request: Request, response: Response) => {
    response.send("<h1>Welcome to cute kittens REST API!</h1>");
});

server.get("/api/kittens", async(request: Request, response: Response) => {
    const kittens = await filer.getAllKittens();
    response.json(kittens);
});

server.post("/api/kittens", async (request: Request, response: Response) => {
    const { name, age } = request.body;
    const kittens = await filer.getAllKittens();

    const kitten: Kitten = {
        id: kittens.length ? Math.max(...kittens.map(k => k.id ?? 0)) + 1 : 1,
        name,
        age
    };

    kittens.push(kitten);
    await filer.saveAllKittens(kittens);
    response.status(201).json(kitten);
});

server.listen(appConfig.port, () => console.log("Listening..."));

