'use strict'

// const { MongoClient } = require('mongodb')
import mongoose from "mongoose";
require('dotenv').config()

const {
    DB_USER,
    DB_PASSWD,
    DB_HOST,
    DB_NAME,
    DB_PORT
} = process.env

const mongoUrl = `mongodb+srv://${DB_USER}:${DB_PASSWD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
let connection

console.log('mongoUrl', mongoUrl)

const connectDB = async () => {
    console.log('entro');
    if (connection) return connection

    let client
    try {
        client = await mongoose.connect(mongoUrl, {
            useNewUrlParser: true
        })
        connection = client.db(DB_NAME)
        
    } catch (error) {
        console.error('Could not connect to db', mongoUrl, error)
        process.exit(1)
    }

    console.log('connection', connection)
    return connection;
}

console.log('connection Afuera', connection)

module.exports = connectDB