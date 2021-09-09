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

            const match = {
                // laureates: {
                //     $elemMatch: {
                //         firstname: "Jean-Pierre"
                //     }
                // }
                category: "economics"
            }
            const group = {
                _id: "$year",
                count: {
                    $count: {}
                },
                winRatio: {
                    $avg: {
                        $divide: [
                            "$wins",
                            {
                                $add: ["$wins", "$losses"]
                            },
                        ]    
                    }
                },
            }
            
            // const cursor = collection.find(query, options)
            const cursor = collection.aggregate([
                {
                    $match: match
                },
                {
                    $group: group
                }
            ])


            // db.inventory.aggregate( [ { $unwind : "$sizes" } ] )
            
            
            
            const arr = cursor.toArray();
            resolve(arr);
        });
    })
}

main().then(result => {
    console.log("main result")
    console.log(result);
}).catch(err => {
    console.log("error occured");
    console.log(err);
})
