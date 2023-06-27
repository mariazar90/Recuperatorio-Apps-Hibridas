import * as service from "../../services/client.services.js";

function getAllClients(req, res) {
  service.getAllClients(req.query).then(function (client) {
    if (client) {
      res.status(200).json(client);
    } else {
      res.status(404).json({ error: { message: `No existe cliente` } });
    }
  });
}

function getClients(req, res) {
  const id = req.params.id;

  service.getClients(id).then(function (client) {
    if (client) {
      res.status(200).json(client);
    } else {
      res.status(404).json({ project_id: id });
    }
  });
}

function createClient(req, res) {
  const id = req.params.id;

  const client = {
    name: req.body.name,
    photo: req.body.photo,
    description: req.body.description,
  };

  service.createClient(id, client).then(function (client) {
    res.status(201).json(client);
  });
}

export { getAllClients, getClients, createClient };
