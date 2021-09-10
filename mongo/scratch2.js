const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

const dbName = "nobel";
const collectionName = "prizes";

const main = () => {
    return new Promise((resolve, reject) => {
        client.connect().then(client => {
            collection = client.db(dbName).collection(collectionName);
            let cursor;

            // const cursor = collection.listIndexes()
            // cursor.toArray().then(indexes => {
            //     resolve(indexes);
            // })
            
            // const query = {
            //     wins: 4,
                // losses: {
                //     $in: [3, 2, 5]
                // }
            // }

            // const cursor = collection.find(query).sort({year: 1})
            // cursor.toArray().then(documentArr => {
                // console.log("first lmnt");
                // console.log(documentArr[0]);
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
            //     resolve(documentArr);
            // }).catch(err => {
            //     reject(err);
            // })
            // cursor = collection.distinct("laureates.motivation");

            // cursor = collection.find({
            //     $expr: {
            //         $function: {
            //             body: function(name) {return name.includes("contrib")},
            //             args: ["$laureates.motivation"],
            //             lang: "js"
            //         }
            //     }
            // })

            // collection.createIndex(
            //     {
            //         "laureates.motivation": "text",
            //         "laureates.firstname": "text",
            //         "laureates.surname": "text"
            //     },
            //     {
            //         name: "Motivation Text"
            //     },
            //     (err, newIndex) => { 
            //         if(err) reject(err);
            //         resolve(newIndex);
            //     }
            // )

            // const match = {
            //     $match: {
            //         $text: {
            //             $search: "developing"
            //         }    
            //     }
            // }

            // const unwind = {
            //     $unwind: {
            //         path: "$laureates"
            //     }
            // }

            // const group = {
            //     $group: {
            //         _id: "$category",
            //         laure: {
            //             "laureates": 1
            //         }
            //     }
            // }

            // cursor = collection.aggregate([match, group, unwind])
            

            // cursor = collection.distinct("category", {
            //     "laureates.1": {$exists: true}
            // });
            // resolve(cursor);

            // cursor = collection.find({
            //     // "laureates.share": '1',
            //     laureates: {
            //         $size: 1
            //     },

            //     year: {
            //         $gte: "2017"
            //     }
            //     // $text: {
            //     //     $search: "contributions"
            //     // }
            //     // "laureates.surname": 'Thaler'
            // }).count()
            // resolve(cursor);
            const query = {
                $text: {
                    $search: "contribution"
                },
                "laureates.motivation": {
                    $not: { $regex: "^\"for" }
                } 
            }

            const unwind = {
                path: "$laureates"
            }

            // cursor = collection.aggregate([
            //     {
            //         $match: query
            //     },
            //     // {
            //     //     $unwind: unwind
            //     // }
            // ])
            cursor = collection.aggregate([
                {
                    $match: query
                },
                {
                    $unwind: unwind
                }
            ])


            // resolve(cursor);
            cursor.toArray().then(arr => {
                resolve(arr);
            }).then(err => {
                reject(err);
            })
        })
    })
}

main().then(result => {
    console.log("Finished execution");
    console.log(result);
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
