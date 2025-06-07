"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeRoute = void 0;
const express_1 = require("express");
const HomeController_1 = require("../controllers/HomeController");
const HomeRoute = () => {
    const homeRouter = (0, express_1.Router)();
    const homeController = new HomeController_1.HomeController();
    homeRouter.get("/", homeController.Hello);
    return homeRouter;
};
exports.HomeRoute = HomeRoute;
