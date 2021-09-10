const prizes = require("./prizes.json");
const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

const dbName = "nobel";

async function main() {
    return new Promise((resolve, reject) => {
        client.connect().then(client => {
            console.log("connected to server");
            const db = client.db(dbName);
            let collection = db.collection('prizes');
            collection.drop((err, delOk) => {
                if(err) reject(err);
                collection = db.collection('prizes');
                collection.insertMany(prizes).then(result => {
                    resolve(result);
                }).catch(err => {
                    reject(err);
                });
            });
            // collection.insertMany(prizes);        
        })
    })
}

// console.log(prizes[0]);

main().then(result => {
    console.log("result")
    console.log(result.length);
}).catch(err => {
    console.log("error occured");
    console.log(err);
})