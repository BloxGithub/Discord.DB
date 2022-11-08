import { MongoClient } from 'mongodb';

const disDB = new Object();

disDB.connectDB = async function connectDB(url) {
    try {
        const client = new MongoClient(url);
        await client.connect().then(console.log('Connected successfully to server'));
    } catch {
        console.error();
    }
};

export default disDB;