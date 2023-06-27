import * as service from "../services/projects.services.js";
import * as view from "../views/projects.views.js";

function getProjects(req, res) {
  service.getProjects().then(function (projects) {
    res.send(view.createProjectsHome(projects));
  });
}

function getProjectById(req, res) {
  let idProject = req.params.idProject;

  service.getProjectById(idProject).then(function (project) {
    if (project) {
      res.send(view.createProjectPage(project));
    } else {
      res.send(
        view.createPage("Error", "<p>No se ha encontrado el proyecto</p>")
      );
    }
  });
}

function getProjectBySection(req, res) {
  let section = req.params.section;

  service.getProjectBySection(section).then(function (project) {
    if (project) {
      res.send(view.createProjectPage(project));
    } else {
      res.send(
        view.createPage("Error", "<p>No se ha encontrado el proyecto</p>")
      );
    }
  });
}

function createProject(req, res) {
  const project = {
    name: req.body.name,
    description: req.body.description,
    link: req.body.link,
    img: req.body.img,
    technologies: req.body.technologies,
    section: req.body.section,
  };

  service
    .createProject(project)
    .then(function (newProject) {
      res.send(
        view.createPage(
          "Proyecto Creado",
          `<p>Proyecto: ${newProject.name}</p>`
        )
      );
    })
    .catch(function (err) {
      res.send(view.createPage("Error"));
    });
}

function editProject(req, res) {
  const section = req.params.section;

  const project = {
    name: req.body.name,
    description: req.body.description,
    link: req.body.link,
    img: req.body.img,
    technologies: req.body.technologies,
    section: req.body.section,
  };

  service.editProjectById(section, project).then(function (project) {
    if (project) {
      res.send(view.createPage("Se ha editado el proyecto"));
    } else {
      res.send(view.createPage("No se pudo editar la sección"));
    }
  });
}

function deleteProject(req, res) {
  const section = req.params.section;
  service.deleteProject(section).then(function (project) {
    if (project) {
      res.send(view.createPage("Se eliminó el proyecto"));
    } else {
      res.send(view.createPage("Proyecto no encontrado"));
    }
  });
}

export {
  getProjects,
  getProjectById,
  getProjectBySection,
  createProject,
  editProject,
  deleteProject,
};
