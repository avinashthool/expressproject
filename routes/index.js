//This file is used for fetching data from backend

var express = require('express');
var mysql = require('mysql');
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var router = express.Router();
var path = require("path");
/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
});

router.get('/statistic', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', 'views', 'stats.html'));
});

router.get('/contact-us', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', 'views', 'contact.html'));
});

router.get('/about-us', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', 'views', 'abt.html'));
});


router.get('/help', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', 'views', 'help.html'));
});


router.get('/sample', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', 'views', 'sample.html'));
});

router.get('/header', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', 'views', 'header-menu.html'));
});

router.get('/gallery', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', 'views', 'gallery.html'));
});

router.get('/footer', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', 'views', 'footer-menu.html'));
});

router.get('/articles', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', 'views', 'articles.html'));
});


// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "srisri56",
//   database:"my_data"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM users", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });




// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("unity");
//   dbo.collection("fields_current.node").findOne({}, function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("interiorDesign");
//   dbo.createCollection("articles", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("interiorDesign");
//   var myobj = { title: "First Articles", description: "klsflsdhfsdlfhldkfhlf lsjlfisdfl ljsdflkslfjs klsdhfhklsf lksdfklsdfls lksddflksdflk", thumbnail:"img-1.jpg", titleImage:"imgl-1.jpg" };
//   dbo.collection("articles").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });

router.get('/data', function(req,res){
	res.json([{"id": 1, "name": "Mymm", "city": "Pantano do Sul"},
        {"id": 2, "name": "Skyble", "city": "Guilmaro"},
        {"id": 3, "name": "Tagfeed", "city": "Gnosjö"},
        {"id": 4, "name": "Realcube", "city": "Jrashen"},
        {"id": 5, "name": "Bluejam", "city": "Zhangjiawo"},
        {"id": 6, "name": "Jayo", "city": "Obonoma"},
        {"id": 7, "name": "Cogidoo", "city": "Sungsang"},
        {"id": 8, "name": "Avavee", "city": "Diawara"},
        {"id": 9, "name": "Tagtune", "city": "Monywa"},
        {"id": 10, "name": "Centimia", "city": "Retkovci"}]);
});

router.get('/largeSliderImages', function(req,res){
  res.json(
                  [
                    {src: "img-1.jpg", text:"Seminar"},
                    {src: "img-2.jpeg", text:"Kids gaming"},
                    {src: "img-3.jpg", text:"Independant Day"},
                    {src: "img-4.jpg", text:"Drawing Competition"},
                    {src: "img-5.jpg", text:"Our Faculty"},
                    {src: "img-6.jpg", text:"Our Faculty"},
                    {src: "img-7.jpg", text:"Our Faculty"},
                    {src: "img-8.jpg", text:"Our Faculty"}
                  ]
                );
});

router.get('/galleryImages', function(req,res){
  res.json(
            [
                      {label: "gal-1.jpg", text:"Seminar"},
                      {label: "gal-2.jpg", text:"Kids gaming"},
                      {label: "gal-3.jpg", text:"Independant Day"},
                      {label: "gal-5.jpg", text:"Our Faculty"},
                      {label: "gal-6.jpg", text:"Our Faculty"},
                      {label: "gal-7.jpg", text:"Our Faculty"},
                      {label: "gal-13.jpg", text:"Our Faculty"},
                      {label: "gal-9.jpg", text:"Our Faculty"},
                      {label: "gal-10.jpg", text:"Our Faculty"},
                      {label: "gal-11.jpg", text:"Our Faculty"},
                      {label: "gal-12.jpg", text:"Our Faculty"},
                      {label: "gal-14.jpg", text:"Our Faculty"}
                  ]
                );
});


router.get('/chartData', function(req,res){
    res.json({
      chart: {
          caption: "Project Handled",
          subCaption: "Total creation in last few years",
          numberPrefix: "",
          theme: "ocean"
      },
      data:[
      { label: "2012", value: "80" },
      { label: "2015", value: "90" },
      { label: "2016", value: "90" },
      { label: "2017", value: "95" },
      { label: "2018", value: "110" }
      ]
  })
});

router.get('/articleThumbnails', function(req,res){
    var url = "mongodb://localhost:27017/";
    var jsonResult = "";
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("interiorDesign");
      dbo.collection("articles").findOne({}, function(err, thumbNails) {
        console.log(thumbNails);
        res.json({
            thumbNails
        })
        db.close();
      });
    });
    
});

module.exports = router;
