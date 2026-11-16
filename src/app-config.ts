import dotenv from "dotenv";

dotenv.config({quiet:true});

class AppConfig{
    public readonly port = Number(process.env.PORT);
}

export const appConfig = new AppConfig();