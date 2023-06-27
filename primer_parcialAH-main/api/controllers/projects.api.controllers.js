import * as service from "../../services/projects.services.js";

function getProjects(req, res) {
  const filter = req.query

  service.getProjects(filter)
      .then(function(projects) {
          if (projects) {
              res.status(200).json(projects)
          }
          else {
              res.status(404).json({error:{message: `No se encontraron proyectos`}})}
      })
}

function getProjectById (req, res) {
  const id = req.params.id

  service.getProjectById(id)
      .then(function(project) {
          if (project) {
              res.status(200).json(project)
          }
          else {
              res.status(404).json({error:{message: `No se encontró ningún proyecto con el id ${id}.`}})            }
      })
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

  service.createProject(project).then(function (project) {
    res.status(201).json(project);
  });
}

function replaceProject(req, res) {
  const id = req.params.id
  
  const project = {
    name: req.body.name,
    description: req.body.description,
    link: req.body.link,
    img: req.body.img,
    technologies: req.body.technologies,
    section: req.body.section,
  };

  service.editProjectById(id, project)
  .then(function (project) {
      if (project) {
          res.status(200).json(project)
      } else {
          res.status(404).json({error: {message: `Proyecto no encontrado`}})
      }
  })
}

function editProjectById(req, res) {
  const id = req.params.id
  const project = req.body

  service.editProjectById(id, project)
  .then(function (project) {
      if (project) {
          res.status(200).json(project)
      } else {
          res.status(404).json({error: {message: `Proyecto no encontrado`}})
      }
  })
}

function deleteProject (req, res) {
  const id = req.params.id

  service.deleteProject(id)
  .then(function(project) {
      if (project) {
          res.status(200).json(project)
      } else {
          res.status(404).json({error: {message: `Proyecto no encontrado`}})
      }
  })
}

function getProjectClient (req, res) {
  const idClient = req.params.idClient
  service.getProjectsClient(idClient)
  .then(function(project) {
      if (project) {
          res.status(200).json(project)
      } else {
          res.status(404).json({error: {message: `No se encontró ningún projecto relacionado`}})
      }
  })

}

export {
  getProjects,
  getProjectById,
  createProject,
  replaceProject,
  editProjectById,
  deleteProject,
  getProjectClient
};
