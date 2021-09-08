const prizes = require("./prizes.json");
const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

const dbName = "nobel";

async function main() {
    await client.connect();
    console.log("connected to server");
    const db = client.db(dbName);
    const collection = db.collection('prizes');
    await collection.insertMany(prizes);
}

// console.log(prizes[0]);

main().then(result => {
    console.log("result")
    console.log(result);
}).catch(err => {
    console.log("error occured");
    console.log(err);
})