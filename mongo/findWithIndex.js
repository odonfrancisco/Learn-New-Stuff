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

            const cursor = collection.find({
                $text: {
                    $search: "\"discovery\""
                }
            })

            cursor.toArray().then(array => {
                resolve(array);
            }).catch(err => {
                reject(err);
            })

        });
    })
}

main().then(result => {
    console.log("main result")
    console.info(result);
}).catch(err => {
    console.log("error occured");
    console.log(err);
})
