const MongoClient = require('mongodb').MongoClient;
const config = require('../config');


const url = config.get('mongoose:url');
const client = new MongoClient(url);


const getAllProjects = async function() {
  await client.connect();
  try {
    const db = client.db("uptraderTask")
    const collection = db.collection("projects");
    const result = await collection.find().toArray();
    console.log("db responce")
    return result;
  } finally {
    await client.close();
  }
}

getAllProjects().catch(console.dir)

module.exports = {
  getAllProjects
}