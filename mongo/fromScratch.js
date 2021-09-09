const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const dbName = "nobel";
const collectionName = "prizes"
const client = new MongoClient(url);

const date = async () => {
    const timeBefore = Date.now();
    console.log(timeBefore);
    await Promise.all([
        setTimeout(() => {
            console.log("date l8r");
            const timeAfter = Date.now();
            console.log(timeAfter);
            console.log(timeAfter - timeBefore);
        }, 1000)    
    ])
    console.log("after setTimeout");
}

const main = () => {
    const timeBefore = Date.now();
    return new Promise((resolve, reject) => {
        client.connect().then(client => {
            const db = client.db(dbName)
            const collection = db.collection(collectionName);
    
            // const cursor = collection.find({
            //     $text: {
            //         $search: "\"supermassive\""
            //     }
            // });

            // collection.createIndex(
            //     {
            //         "wins": 1
            //     }, 
            //     {
            //         name: "Winnereeeeeerrrr"
            //     },
            //     ( err, result ) => {
            //         if(err) reject(err);
            //         resolve(result);
            //     }
            // )

            // const cursor = collection.find().limit(10).sort({ wins: 1 });

            // if(cursor) {
            //     console.log("NEXT");
            //     console.log(cursor);
            //     // cursor.next().then(next => {
            //     //     resolve(next);
            //     // })
                
            // }
            // cursor.toArray().then(elements => {

            //     const timeAfter = Date.now();
            //     console.log("time elapsed")
            //     console.log(timeAfter - timeBefore);
                
            //     resolve(elements);
            // })

            const cursor = collection.find({ wins: 3 })
            cursor.toArray().then(arr => {
                const timeAfter = Date.now();
                console.log("time elapsed")
                console.log(timeAfter - timeBefore);
                resolve(arr);
            })
            
            // const cursor = collection.listIndexes()
            // cursor.forEach(index => {
            //     console.log(index)
            // })
    
        })
    })
}

main().then(result => {
    console.log("Finished");
    // console.log(result);
})

