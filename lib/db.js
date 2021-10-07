var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'localhost',
	user:'test_user2',
	password:'Pami',
	database:'Oma_Simple_GRUD_harj'
});
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Connected..!');
	}
});

module.exports = connection;