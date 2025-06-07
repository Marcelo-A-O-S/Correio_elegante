import { Request, Response } from "express";

export class HomeController{
    async Hello(req: Request, res: Response): Promise<void>{
        res.json("Hello word!");
    }
}