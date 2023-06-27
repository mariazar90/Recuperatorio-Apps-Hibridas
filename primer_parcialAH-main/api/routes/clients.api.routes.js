import { Router } from "express";
import * as controller from "../controllers/client.api.controllers.js";

const route = Router();

//Clientes

route.get("/client", controller.getAllClients);

route.post("/client", controller.createClient);

route.get("/projects/:id/client", controller.getClients);

route.post("/projects/:id/client", controller.createClient);

export default route;
