console.log('Starting app');
const express = require('express')
const engines = require('consolidate')
// const MongoClient = require('mongodb').MongoClient;
//ES6 destructuring
const {MongoClient} = require('mongodb');


//create express instance
const app = express()
//connect to db server and create the TodoApp database
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to mongodb server.');
  }
  console.log('Successfully connected to mongodb server.');

  //fetch todos - use promises
  db.collection('Todos').find({}).toArray().then((docs) => {
    console.log('***Todos list***');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos, err');
  })


  //insert a doc into the Todos collection (by default: the database won't show if
  //there is no existing doc in there)
  // db.collection('Todos').insertOne({
  //   title:'Work on Day 5 activities',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })

  // db.close(); //commented out to not interfere when fetching todos
})
