console.log('Starting app');
const express = require('express')
const engines = require('consolidate')
const MongoClient = require('mongodb').MongoClient;


//create express instance
const app = express()
//connect to db server and create the TodoApp database
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to mongodb server.');
  }
  console.log('Successfully connected to mongodb server.');

  //insert a doc into the Todos collection (by default: the database won't show if
  //there is no existing doc in there)
  db.collection('Todos').insertOne({
    title:'Work on Day 5 activities',
    completed: false
  }, (err, result) => {
    if(err){
      return console.log('Unable to insert todo', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  })

  db.close();
})
