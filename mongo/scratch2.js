const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

const dbName = "nobel";
const collectionName = "prizes";

const main = () => {
    return new Promise((resolve, reject) => {
        client.connect().then(client => {
            collection = client.db(dbName).collection(collectionName);

            // const cursor = collection.listIndexes()
            // cursor.toArray().then(indexes => {
            //     resolve(indexes);
            // })
            
            const query = {
                wins: {
                    // $ne: 5,
                    // $nin: [5,4,3,2,1]
                    $ne: 2,
                    // $and: {
                    //     $ne: 5
                    // }
                    // $ne: 1
                }
            }

            const cursor = collection.find(query).sort({wins: -1, losses: -1})
            cursor.toArray().then(documentArr => {
                console.log("first lmnt");
                console.log(documentArr[0]);
                // const id = documentArr[0]._id;
                // collection.updateOne(
                //     {
                //         _id: id
                //     },
                //     {
                //         $set: {
                //             wins: 7
                //         }
                //     }
                // ).then(newResult => {
                //     resolve(newResult)
                // })
                resolve(documentArr);
            }).catch(err => {
                reject(err);
            })
        })
    })
}

main().then(result => {
    console.log("Finished execution");
    console.log(result.length);
}).catch(err => {
    console.error(err);
})































// const query = {
//     $match: {
//         // losses: 2
//     }
// };
// const options = {
//     $unwind: {
//         path: "$laureates",
//         includeArrayIndex: "arrayIndex"
//     }
// }

// const cursor = collection.aggregate([query, options]).limit(24);

// cursor.toArray().then(arr => {
//     resolve(arr);
// }).catch(err => {
//     reject(err);
// })
