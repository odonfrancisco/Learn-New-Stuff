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

            const query = { year: { $gt: "2017" }}
            const options = {
                // sort: {category: 1},
                projection : {
                    category: 1,
                    laureates: 1
                },
                limit: 19
            }
            
            const cursor = collection.find(query, options)
            cursor.count().then(count => {
                if(count === 0) {
                    reject("No documents found");
                } else {
                    cursor.toArray().then(arr => {
                        resolve(arr);
                    }).catch(err => {
                        console.error(err);
                        reject(err);
                    })
                }
            }).catch(err => {
                console.error(err);
            })
        });

    })
}

// console.log(prizes[0]);

main().then(result => {
    console.log("main result")
    console.log(result);
}).catch(err => {
    console.log("error occured");
    console.log(err);
})