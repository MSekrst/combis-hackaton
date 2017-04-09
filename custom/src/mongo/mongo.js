import { MongoClient } from 'mongodb';

const url = 'mongodb://172.16.216.94:27017/hackaton' ||
  'mongodb://localhost:27017/hackaton';

let dbConnection;

export function connectDb() {
  MongoClient.connect(url, (err, db) => {
    if (err) {
      console.log('Error while connecting to database!');
    }

    dbConnection = db;
  });
}

export default function getDatabaseConnection() {
  return dbConnection;
}