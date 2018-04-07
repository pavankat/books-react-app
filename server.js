// Dependencies
var express = require("express");
var mongojs = require("mongojs");
var logger = require("morgan");
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3001;
var app = express();

// Set the app up with morgan
app.use(logger("dev"));

// set the app up with bodyparser
app.use(bodyParser());

// Database configuration
var databaseUrl = process.env.MONGODB_URI || "books_db";
var collections = ["books"];

// Hook mongojs config to db variable
var db = mongojs(databaseUrl , collections);

// Log any mongojs errors to console
db.on("error", function(error) {
  console.log("Database Error:", error);
});

/*
  if we don't do this here then we'll get this error in apps that use this api

  Fetch API cannot load No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin is therefore not allowed access. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

  read up on CORs here: https://www.maxcdn.com/one/visual-glossary/cors/
*/
  //allow the api to be accessed by other apps
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
    next();
  });

/*
  ACTIVITY: in your server.js file

  make a route called /book/:id 

  and return the document in the books collection with the id passed in from the url paramaters as json

  10:24

*/
app.get('/book/:id', function(req, res){
  db.books.find({
    "_id": mongojs.ObjectID(req.params.id)
  }, function(error, result){
      res.json(result);
  });
});

/*
  in your server.js
  ACTIVITY 2:28

  make a put route for /book/:id that updates the book with an id of :id with req.body

  hint: 
    see app.get('/book/:id'

    and 

    see app.post('/booksinsert'
*/
app.put('/book/:id', function(req, res){
    db.books.findAndModify({
      query: {
        "_id": mongojs.ObjectId(req.params.id)
      },
      update: { $set: {
        "name": req.body.name }
      },
      new: true
      }, function (err, editedBook) {
          res.json(editedBook);
      });

    // db.books.findAndModify(
    //      { id: mongojs.ObjectId(req.params.id) }, 
    //      [], 
    //      { $set: {name : 'blue'} }, 
    //      { new:true }, 
    //      function(err, doc) {
    //         if (err) res.json(err)
    //         res.json(doc);
    //      });
})










//route to get all of my books
app.get('/books', function(req, res){
	db.books.find({}, function(error, result){
	    res.json(result);
	});
});

//route to add a book
app.post('/booksinsert', function(req, res){
	// {name: 'to kill a mockingbird'} 

	db.books.insert(req.body, function(error, savedBook) {
	  // Log any errors
	  if (error) {
	    res.send(error);
	  }else {
	    res.json(savedBook);
	  }
	});
});

/*
  2:02
  make a route here for a url
  
  /delete/:id
  
  and delete that document in the books collection
*/
app.delete('/delete/:id', function(req, res){
  var book_id = req.params.id;

  db.books.remove({
    "_id": mongojs.ObjectID(book_id)
  }, function(error, removed) {
    if (error) {
      res.send(error);
    }else {
      res.json(book_id);
    }
  });

});

// Listen on port 3001
  app.listen(PORT, function() {
    console.log('🌎 ==> Now listening on PORT %s! Visit http://localhost:%s in your browser!', PORT, PORT);
  });








