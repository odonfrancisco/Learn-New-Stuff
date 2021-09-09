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

            // collection.createIndex(
            //     { losses: 1 }, 
            //     { name: "Losing" },
            //     ( err, result ) => {
            //         console.log(result);
            //         resolve(result);
            //     }
            // )

            // collection.createIndex(
            //     {
            //         category: 1,
            //         losses: -1
            //     },
            //     {
            //         name: "Category Winners"
            //     },
            //     ( err, result ) => {
            //         resolve(result);
            //     }
            // )

            // collection.createIndex(
            //     {
            //         "laureates.motivation": 1
            //     },
            //     {
            //         name: "Winner Motivation"
            //     },
            //     ( err, result ) => {
            //         if(err) reject(err);
            //         resolve(result);
            //     }
            // )

            // HAVEN'T DONE GEOSPATIAL YET

            collection.createIndex(
                {
                    "laureates.motivation": "text"
                },
                {
                    name: "Motivation Text"
                },
                ( err, result ) => {
                    if(err) reject(err);
                    resolve(result);
                }
            )
            

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
