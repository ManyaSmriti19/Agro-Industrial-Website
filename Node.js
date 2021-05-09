var http=require('http');
var express = require('express');
var app = express();
let path=require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var MongoClient = require('mongodb').MongoClient;
app.use(express.static(__dirname));
app.use(express.static(__dirname + "/../public"));
//seller Form
app.get('/submit_sell', function (req, res) {
 res.sendFile(__dirname + "/agriculture.html" );
})
app.post('/process_post',urlencodedParser, function (req, res) {
 var response = { sellerID:req.body.sellerID, sellerName:req.body.sellerName,
productName:req.body.productNameseller, Quantity:req.body.quantitySell,
Product_address:req.body.productAddress, Rate:req.body.sellrate};
 MongoClient.connect('mongodb://localhost:27017/agr_ind', function(err, db){
 if (err)
 throw err;
 console.log("Connected to Database");
 var wdb=db.db("agr_ind");
 wdb.collection('sellerForm').insertOne(response,function(err,result){
 if (err)
 throw err;
 console.log("1 document inserted to sellerForm Collection");
 console.log(response);
 });
 });
});
//Purchase Form
app.get('/submit_sell', function (req, res) {
 res.sendFile(__dirname + "/agriculture.html" );
})
app.post('/process_post1',urlencodedParser, function (req, res) {
 response = { buyer_name:req.body.buyerName, productName:req.body.productNamebuyer,
Quantity:req.body.quantityPurchase, delivery_address:req.body.deliveryAddress};
 MongoClient.connect('mongodb://localhost:27017/', function(err, db){
 if (err) 
 throw err;
 console.log("Connected to Database");
 var wdb=db.db("agr_ind");
 wdb.collection('purchaseForm').insertOne(response,function(err,result){
 if (err)
 throw err;
 console.log("1 document inserted to purchaseForm Collection");
 console.log(response);
 });
 });
});
//sell Form Industry
app.get('/submit_sell_ind', function (req, res) {
 res.sendFile(__dirname + "/sell1.html" );
})
app.post('/process_post2',urlencodedParser, function (req, res) {
 response = { sellerID:req.body.sellerID, sellerName:req.body.sellerName,
productName:req.body.productNameseller, Quantity:req.body.quantitySell,
Product_address:req.body.productAddress, Rate:req.body.sellrate};
 MongoClient.connect('mongodb://localhost:27017/', function(err, db){
 if (err)
 throw err;
 console.log("Connected to Database");
 var wdb=db.db("agr_ind");
 wdb.collection('sellerFormInd').insertOne(response,function(err,result){
 if (err)
 throw err;
 console.log("1 document inserted to sellerFormInd Collection");
 console.log(response);
 });
 });
});
//purchase form Industry
app.get('/submit_purc_Ind', function (req, res) {
 res.sendFile(__dirname + "/purc1.html" );
})
app.post('/process_post3',urlencodedParser, function (req, res) {
 response = { buyer_name:req.body.buyerName, productName:req.body.productNamebuyer,
Quantity:req.body.quantityPurchase, delivery_address:req.body.deliveryAddress};
 MongoClient.connect('mongodb://localhost:27017/', function(err, db){
 if (err)
 throw err;
 console.log("Connected to Database");
 var wdb=db.db("agr_ind");
 wdb.collection('purchaseFormInd').insertOne(response,function(err,result){
 if (err)
 throw err;
 console.log("1 document inserted to purchaseFormInd Collection");
 console.log(response);
 });
 });
});
//Food Products
app.get('/Food_product', function (req, res) {
 res.sendFile(__dirname + "/organic.html" );
})
app.post('/process_post4',urlencodedParser, function (req, res) {
 response = { buyer_name:req.body.buyerName, productName:req.body.productNamebuyer,
Quantity:req.body.quantityPurchase, delivery_address:req.body.deliveryAddress};
 MongoClient.connect('mongodb://localhost:27017/', function(err, db){
 if (err)
 throw err;
 console.log("Connected to Database");
 var wdb=db.db("agr_ind");
 wdb.collection('purchaseOrganic').insertOne(response,function(err,result){
 if (err)
 throw err;
 console.log("1 document inserted to purchaseOrganic Collection");
 console.log(response); 
 });
 });
});
//Other products
app.get('/Food_product', function (req, res) {
 res.sendFile(__dirname + "/organic.html" );
})
app.post('/process_post5',urlencodedParser, function (req, res) {
 response = { buyer_name:req.body.buyerName, productName:req.body.productNamebuyer,
Quantity:req.body.quantityPurchase1, delivery_address:req.body.deliveryAddress1};
 MongoClient.connect('mongodb://localhost:27017/', function(err, db){
 if (err)
 throw err;
 console.log("Connected to Database");
 var wdb=db.db("agr_ind");
 wdb.collection('purchaseOther').insertOne(response,function(err,result){
 if (err)
 throw err;
 console.log("1 document inserted to purchaseOther Collection");
 console.log(response);
 });
 });
});
//seller registration
app.get('/register', function (req, res) {
 res.sendFile(__dirname + "/register.html" );
})
app.post('/process_post6',urlencodedParser, function (req, res) {
 response = { sellerName:req.body.name, seller_ID:req.body.UserID,
email:req.body.email, address:req.body.address, email:req.body.email,
contact:req.body.Contact};
 MongoClient.connect('mongodb://localhost:27017/', function(err, db){
 if (err)
 throw err;
 console.log("Connected to Database");
 var wdb=db.db("agr_ind");
 wdb.collection('sellers').insertOne(response,function(err,result){
 if (err)
 throw err;
 console.log("1 document inserted to sellers Collection");
 console.log(response);
 });
 });
});
app.listen(3000,function() {
 console.log('Listening to port: ' + 3000);
}); 
