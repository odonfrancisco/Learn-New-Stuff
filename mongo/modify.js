const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

const dbName = "nobel";

async function main() {
    return new Promise((resolve, reject) => {
        client.connect().then(client => {
            console.log("connected to server");
            const db = client.db(dbName);
            const collection = db.collection('prizes');

            const cursor = collection.find();
            // for(let i = 0; i < cursor.length; i++) {
            //     console.log(cursor[i])              
            // }
            cursor.toArray().then(elements => {
                // console.log("elements");
                // console.log(elements);
                elements.forEach(e => {
                    const rando = Number.parseInt((Math.random() * 5) + 1);
                    // console.log("rando");
                    // console.log(rando);
                    collection.findOneAndUpdate({_id: e._id}, {
                        $set: {
                            wins: rando
                        }
                    }).then(result => {
                        resolve(result);
                    }).catch(err => {
                        reject(err);
                    })
                })
            }).catch(err => {
                console.error(err);
            })
        
            // collection.updateMany({}, { $set: {
            //     wins: (Math.random() * 5).toFixed(0)
            // }}).then(result => {
            //     resolve(result);
            // }).catch(err => {
            //     reject(err);
            // })        
        }).catch(err => {
            reject(err);
        });
    })
}

// console.log(prizes[0]);

main().then(result => {
    console.log("finished")
    // console.log(result);
}).catch(err => {
    console.log("error occured");
    console.log(err);
})