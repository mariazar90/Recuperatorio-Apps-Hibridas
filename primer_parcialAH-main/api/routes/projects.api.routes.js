import { Router } from "express";
import * as controller from "../controllers/projects.api.controllers.js";
import clientController from "./clients.api.routes.js";

const route = Router();

//Proyectos

route.get("/projects", controller.getProjects);

route.get("/projects/:id", controller.getProjectById);

route.post("/projects", controller.createProject);

route.delete("/projects/:id", controller.deleteProject);

route.put("/projects/:id", controller.replaceProject);

route.patch("/projects/:id", controller.editProjectById);

route.use(clientController);

export default route;
