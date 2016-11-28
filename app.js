console.log('Starting app');
const express = require('express')
const path = require('path')
//create express instance
const app = express()

const engines = require('consolidate')
const bodyParser = require('body-parser')

// const MongoClient = require('mongodb').MongoClient;
//ES6 destructuring
const {MongoClient, ObjectID} = require('mongodb');

app.use(express.static(path.join(__dirname, 'views')))

app.use(bodyParser.urlencoded({extended: true}))

//connect to db server and create the TodoApp database
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to mongodb server.');
  }
  console.log('Successfully connected to mongodb server.');

  //fetch todos - use promises
  // db.collection('Todos').find({}).toArray().then((docs) => {
  //   console.log('***Todos list***');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos, err');
  // })
  //fetch single todos - by id - check syntax carefully!!
  db.collection('Todos').find({_id:new ObjectID('583bbe56ed2df9081508bfc2')}).toArray().then((docs) => {
    console.log('***Find Todo by a id***');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos, err');
  })

  //call count
  // db.collection('Todos').find({}).count().then((count) => {
  //   console.log('***Todos list***');
  //   console.log(`Todos count: ${count}`);
  //
  // }, (err) => {
  //   console.log('Unable to fetch todos, err');
  // })


  //insert a doc into the Todos collection (by default: the database won't show if
  //there is no existing doc in there)
  // db.collection('Todos').insertOne({
  //   title:'Work on mongodb homework',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })

  //get route
  app.get('/', (req, res) => {
    res.render('index.html')
  })

  //web server listen
  app.listen(3005, () => {
    console.log('express server listening on port 3005...');
  })

  // db.close(); //commented out to not interfere when fetching todos
})
