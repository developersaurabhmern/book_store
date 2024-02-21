import express from 'express';
import data from './data.js';
import dotenv from 'dotenv';
import config from './config.js';
import mongoose from 'mongoose';
import path from 'path';
import userRoute from './routes/userRoute.js';
import productRoute from './routes/productRoute.js';
import uploadRouter from './routes/uploadRouter.js';
import bodyParser from 'body-parser';
import orderRouter from './routes/orderRouter.js';

import mongodb from 'mongodb';
var MongoClient = mongodb.MongoClient;
var objectId = mongodb.ObjectID;

//import {Payouts}   from 'cashfree-sdk';
// const { Payouts } = require('./cashfree-sdk');


dotenv.config();




const mongodbUrl = config.MONGODB_URL;

mongoose.connect(mongodbUrl, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
}).catch(error => console.log(error.reason));

const app = express();
//app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));


app.use('/api/uploads', uploadRouter);
app.use("/api/users/", userRoute);
app.use("/api/products", productRoute)
app.use('/api/orders', orderRouter);
//app.use('/api/allorders', allorders);

//app.use('/api/getaddress', getaddress);


app.post('/api/updateOrder', (req, res) => {
	var url = 'mongodb://mongoadmin:BFCCapital001comIndia@20.204.84.227:27017/book_store_live?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';
	//var objectId = new ObjectID();
	// console.log(req.body.ReferenceID);
	// return false
	MongoClient.connect(url, function (err, db) {
		if (err) throw err;
		var dbo = db.db("book_store_live");
		var myquery = { '_id': objectId(req.body.ReferenceID) };
		var newvalues = { $set: { isPaid: true } }
		// res.send(newvalues)
		dbo.collection("orders").updateOne(myquery, newvalues, function (err, res2) {
			if (err) throw err;
			console.log("1 document updated");
			// //   db.close();
		});
	});
});

app.post('/api/getmyorders', (req, res) => {
	// console.log("reqdata",req.body.UserId);
	// const orders = await Order.find({ user: req.body.UserId });
	var url = 'mongodb://mongoadmin:BFCCapital001comIndia@20.204.84.227:27017/book_store_live?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';
	MongoClient.connect(url, function (err, db) {
		if (err) throw err;
		var dbo = db.db("book_store_live");
		var condition = { user: objectId(req.body.UserId), isPaid: true };		dbo.collection("orders").find(condition).toArray(function(err, result) {
		// dbo.collection("orders").find({}, function (err, res2) {
			if (err) throw err;
			res.send(result);

		});
	});
})


app.get('/api/config/paypal', (req, res) => {
	res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

/* app.get('/', (req, res)=>{
	res.send('server is ready')
}) */

app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) =>
	res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);

const port = 8080;



// app.get("/api/products/:id", (req, res)=>{
// 	//res.send(data.products);
// 		const productId= req.params.id;
// 		const product= data.products.find(x => x._id === productId);
// 		if(product){
// 			res.send(product)
// 		}else{
// 			res.status(404).send({ msg: "Product Not Found"})
// 		}
// });

///////////////////////////

// app.get("/api/products", (req, res)=>{
// 	res.send(data.products);
// });

app.use((err, req, res, next) => {
	res.status(500).send({ message: err.message });
});

app.listen(port, "127.0.0.1", () => { console.log("server started at port ", port) })
