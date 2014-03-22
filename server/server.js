var express = require('express'); // Checkout expressjs.com - It's a simple web framework for node
var app = express();


// Hello world example - go to: http://localhost:8888/helloworld
app.get('/helloworld', function(req, res){
  res.send('hello world');
});


//----------------------------------------
// MySQL example 

var mysql = require('mysql');  // Create the mysql connection
var squel = require('squel');  // Checkout squel - quick query builder http://hiddentao.github.io/squel/

// Connect to mysql 
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  socketPath : '/var/run/mysqld/mysqld.sock'
});
connection.connect();


// Send back the lists - go to: http://localhost:8888/lists
app.get('/lists', function(req, res){

	// You can use squel to create the query for you.
	var query = squel.select()
					.from('todo.lists');
	// query.toString() -> select * from todo.lists

					
	// Then use the connection to make a query
	connection.query(query.toString(), function(err, rows, fields) {
  		if (err) throw err;

		// send back the json in the response
		res.send(rows);
	});
});


// ------------------------------------------
// TODO - Create a request that will send back the tasks in a list

// So you can go do : http://localhost:8888/tasks/{listId}
//               ex : http://localhost:8888/tasks/0
app.get('/tasks/:listId', function(req, res){
	
	var listId = req.params.listId;

	res.send('This is your list id: ' + listId)

});



// Port that the server listens on
app.listen(8888);