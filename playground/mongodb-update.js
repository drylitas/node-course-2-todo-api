//MongoDB module v3
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if(err){
		return console.log('Unable to connect MongoDB server');
	}
		console.log('Connected to MongoDB server');
		const db = client.db('TodoApp')

		//findOneAndUpdate
		// db.collection('Todos').findOneAndUpdate({
		// 	_id: new ObjectId("5be3080e0b8e1c6ae68afee8")
		// },{
		// 	$set:{
		// 	completed:true
		// }
		// },{
		// 	returnOriginal:false
		// }).then((result) =>{
		// 	console.log(result);
		// });

		//findOneAndUpdate
		db.collection('Users').findOneAndUpdate({
			_id: new ObjectId("5beb001f5700b7730ac9158a")
		},{
			$set: {
	      name: 'Andres'
	    },
	    $inc: {
	      age: 1
	    }
	  }, {
			returnOriginal:false
		}).then((result) =>{
			console.log(result);
		});



	client.close();
});
