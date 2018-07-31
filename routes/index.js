//This file is used for fetching data from backend

var express = require('express');
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
  res.sendFile(path.join(__dirname, '../', 'views', 'about.html'));
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

module.exports = router;
