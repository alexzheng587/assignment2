let mongoose = require('mongoose');

const server = 'cluster0-htlvb.mongodb.net'; // REPLACE WITH YOUR DB SERVER
const database = 'Messages';      // REPLACE WITH YOUR DB NAME

class Database {
    constructor() {
        this._connect()
    }

    _connect() {
        mongoose.connect(`mongodb+srv://m001-student:m001-mongodb-basics@${server}/${database}`)
            .then(() => {
                console.log('Database connection successful')
            })
            .catch(err => {
                console.error('Database connection error')
            })
    }
}

module.exports = new Database();