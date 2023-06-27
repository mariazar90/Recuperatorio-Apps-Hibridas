import { createPage } from "../pages/utils.js";

function createProjectsHome() {
  let html = "<h1>Mis proyectos</h1>";
  html += "<p>Haga click en una sección para ver el proyecto</p>";
  return createPage("Proyectos", html);
}

function createProjectPage(project) {
  let html = `<h2>${project.name}</h2>`;
  html += '<div class="card-c">';
  html += `<div class="card">
          <img src="${project.img}"></img>
          <div class="card-body">
          <p>Descripción: ${project.description}</p>
          <p>Link al repositorio: <a href="${project.link}">Ir</a></p>
          <p>Tecnologías utilizadas: ${project.technologies}</p>
          </div>
          </div></div>`;

  return createPage(project.name, html);
}

export { createProjectPage, createProjectsHome, createPage };
