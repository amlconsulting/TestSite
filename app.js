'use strict';

var dotenv = require('dotenv').config();

var mongo = require('mongodb').MongoClient,
    assert = require('assert');

var url = 'mongodb://' + process.env.DATABASE_HOST + ':' + process.env.DATABASE_PORT + '/' + process.env.DATABASE_NAME;

console.log("Connecting to " + url);

mongo.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    
    db.close();
});