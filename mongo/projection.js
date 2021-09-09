const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

const dbName = "nobel";

const main = () => {
    return new Promise((resolve, reject) => {
        /* nested thens? not a fan. maybe there's
        a better way to await client.connect() without
        using await */     
        client.connect().then(client => {
            // console.log(result);
            console.log("connected to server");
            const db = client.db(dbName);
            const collection = db.collection('prizes');

            const projection = {
                _id: 0,
                // category: 1,
                laureates: {
                    firstname: 1
                }
            }

            const cursor = collection.find().project(projection);
            cursor.toArray().then(data => {
                resolve(data)
            })
        });
    })
}

main().then(result => {
    console.log("main result")
    console.info(result);
    result.forEach(e => {
        console.log("laureate[0]")
        console.log(e.laureates[0]);
    })
}).catch(err => {
    console.log("error occured");
    console.log(err);
})
