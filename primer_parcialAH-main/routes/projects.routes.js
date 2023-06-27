import express from "express";
import * as controller from "../controllers/projects.controllers.js";

const route = express.Router();

route.get("/", controller.getProjects);
route.get("/projects/:section", controller.getProjectBySection);

export default route;
