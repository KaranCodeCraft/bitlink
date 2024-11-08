import { MongoClient } from 'mongodb';

const url = process.env.MONGODB_URI;
const options = {
  useNewUrlParser: true, // Fixed spelling to "Url"
};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error("Mongo URI not available");
}

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable to preserve the MongoClient across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(url, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(url, options);
  clientPromise = client.connect();
}

export default clientPromise;
