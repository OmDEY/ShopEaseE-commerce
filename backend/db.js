
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://omdey3424:67ZgnuDWVxvK7LpL@cluster0.e1klmdc.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let connectedClient;

async function connectToDB() {
  if (!connectedClient) {
    try {
      await client.connect();
      console.log("Connected successfully to MongoDB");
      connectedClient = client;
    } catch (err) {
      console.error("Failed to connect to MongoDB", err);
    }
  }
  return connectedClient;
}

module.exports = { connectToDB };