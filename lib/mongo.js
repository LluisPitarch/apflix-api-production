const { ObjectId, MongoClient } = require('mongodb');
const { config } = require('../config/index');

const USER = encodeURIComponent(config.db_user);
const PASSWORD = encodeURIComponent(config.db_password);
const HOST = encodeURIComponent(config.db_host);
const DB_NAME = encodeURIComponent(config.db_name);

// const USER = 'lluis-admin';
// const PASSWORD = 'Barcaza131';
// const HOST = 'lluis-platzi-lwxdk.mongodb.net';
// const DB_NAME = 'platzi-videos';

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${HOST}/${DB_NAME}`;

class MongoLib {
    constructor() {
        this.client = new MongoClient(MONGO_URI, { useUnifiedTopology: true });
        this.dbName = DB_NAME;
    }

    async connect() {
        if (!MongoLib.connection) {
            MongoLib.connection = await new Promise((resolve, reject) => {
                this.client.connect((err) => {
                    if (err) {
                        reject(err);
                        console.error(err);
                    }

                    console.log('Connection to mongo DB was successfully');
                    resolve(this.client.db(this.dbName));
                });
            });
        }
        return MongoLib.connection;
    }

    getAll(collection, query) {
        return this.connect().then((db) => {
            return db.collection(collection).find(query).toArray();
        });
    }

    get(collection, id) {
        return this.connect().then((db) => {
            return db.collection(collection).findOne({ _id: ObjectId(id) });
        });
    }

    create(collection, data) {
        return this.connect()
            .then((db) => {
                return db.collection(collection).insertOne(data);
            })
            .then((result) => result.insertedId);
    }

    update(collection, id, data) {
        return this.connect()
            .then((db) => {
                return db
                    .collection(collection)
                    .updateOne(
                        { _id: ObjectId(id) },
                        { $set: data },
                        { upsert: true }
                    );
            })
            .then((result) => result.upsertedId || id);
    }

    delete(collection, id) {
        return this.connect()
            .then((db) => {
                return db
                    .collection(collection)
                    .deleteOne({ _id: ObjectId(id) });
            })
            .then(() => id);
    }

    deleteUserMovie(collection, movieid, userid) {
        return this.connect()
            .then((db) => {
                return db.collection(collection).deleteOne({
                    movieId: movieid,
                    userId: userid,
                });
            })
            .then(() => movieid);
    }

    // ####### Connection method test
    // async test() {
    //     try {
    //         const response = await this.connect().then((db) =>
    //             db.collection('movies').findOne()
    //         );

    //         console.log(response);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
}

module.exports = MongoLib;

// #### Connection method call
// const mongo = new MongoLib();
// mongo.test();
