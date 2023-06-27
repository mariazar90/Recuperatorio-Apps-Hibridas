import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1:27017");
const db = client.db("AH20231CP1");

async function getProjects(filter = {}) {
  await client.connect();

  if (filter?.section && filter?.technologies) {
    return db
      .collection("Projects")
      .find({
        section: filter.section,
        technologies: { $in: [filter.technologies] },
      })
      .toArray();
  } else if (filter?.section) {
    return db
      .collection("Projects")
      .find({ section: filter.section })
      .toArray();
  } else if (filter?.technologies) {
    return db
      .collection("Projects")
      .find({ technologies: { $in: [filter.technologies] } })
      .toArray();
  } else {
    return db.collection("Projects").find(filter).toArray();
  }
}

async function getProjectById(id) {
  await client.connect()
  return db.collection("Projects").findOne({_id: new ObjectId(id)})
}

async function getProjectBySection(section) {
  await client.connect();
  return db.collection("Projects").findOne({ section })
}

async function createProject(project) {
  await client.connect();
  return db.collection("Projects").insertOne(project);
}

async function editProjectById(id, project) {
  await client.connect();
  return db
    .collection("Projects")
    .updateOne({ _id: new ObjectId(id) }, { $set: project });
}

async function replaceProject(id, project) {
  await client.connect();
  return db
    .collection("Projects")
    .replaceOne({ _id: new ObjectId(id) }, { $set: project });
}

async function deleteProject(id) {
  await client.connect();
  return db.collection("Projects").deleteOne({ _id: new ObjectId(id) });
}

async function getProjectsClient(idClient) {
  await client.connect();
  return db
    .collection("Projects")
    .find({ id_client: new ObjectId(idClient) })
    .toArray();
}

export {
  getProjects,
  getProjectById,
  getProjectBySection,
  createProject,
  editProjectById,
  replaceProject,
  deleteProject,
  getProjectsClient,
};
