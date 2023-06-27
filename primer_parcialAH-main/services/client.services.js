import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1:27017");
const db = client.db("AH20231CP1");

async function getAllClients(filter = {}) {
  await client.connect();
  return db.collection("Clientes").find(filter).toArray();
}

async function getClients(id) {
  await client.connect();
  return db.collection("Clientes").findOne({ project_id: new ObjectId(id) });
}

async function createClient(id, client) {
  const update = await db
    .collection("Clientes")
    .updateOne({ project_id: new ObjectId(id) }, { $push: { client: client } });

  if (update.matchedCount == 0) {
    await db
      .collection("Clientes")
      .insertOne({ project_id: new ObjectId(id), client: client });
  }

  return client;
}

export { getAllClients, getClients, createClient };
