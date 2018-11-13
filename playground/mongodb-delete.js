//MongoDB module v3
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if(err){
		return console.log('Unable to connect MongoDB server');
	}
		console.log('Connected to MongoDB server');
		const db = client.db('TodoApp')

		//deleteMany
		// db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result) =>{
		// 	console.log(result);
		// });

		//deleteOne
		// db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result) =>{
		// 	console.log(result);
		// });

		//findOneAndDelete
		// db.collection('Todos').findOneAndDelete({completed:true}).then((result) =>{
		// 	console.log(result);
		// });

		//deleteMany
		// db.collection('Users').deleteMany({name:'Andres'}).then((result) =>{
		// 	console.log(result);
		// });

		//findOneAndDelete
		db.collection('Users').findOneAndDelete({_id: new ObjectId("5beaff555700b7730ac9156c")}).then((result) =>{
			console.log(JSON.stringify(result, undefined, 2));
		});


	client.close();
});
