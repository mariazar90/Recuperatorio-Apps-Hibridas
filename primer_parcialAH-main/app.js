import express from "express"
import ProjectRoute from './routes/projects.routes.js'
import ProjectsRouteApi from './api/routes/projects.api.routes.js'

const app = express();

app.use('/api',express.json())
app.use("/",express.static("public"));

app.use('/', ProjectRoute)
app.use('/api', ProjectsRouteApi)

app.listen(2222, function () {
  console.log("Conectado al puerto 2222");
});
