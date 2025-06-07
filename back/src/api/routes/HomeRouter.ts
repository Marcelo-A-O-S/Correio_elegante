import { Router } from "express"
import { HomeController } from "../controllers/HomeController";
const HomeRoute = () =>{
    const homeRouter = Router();
    const homeController = new HomeController();
    homeRouter.get("/", homeController.Hello);
    return homeRouter;
}

export { HomeRoute }