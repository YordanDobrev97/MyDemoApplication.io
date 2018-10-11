var express = require("express");
var app = express();
var path = require("path");

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});
app.get('/style.css', function(req, res) {
    res.sendFile(__dirname + "/" + "style.css");
});
// app.get('/',function(req,res){
//   res.sendFile(path.join(__dirname+'/about.html'));
//   //__dirname : It will resolve to your project folder.
// });
//app.use(express.static('/images/js-with-love-1024x683.jpg'));

// app.get('/sitemap',function(req,res){
//   res.sendFile(path.join(__dirname+'/sitemap.html'));
// });

app.listen(3000);

console.log("Running at Port 3000");
//http://www.lobohouse.com/wp-content/uploads/2018/01/js-with-love-1024x683.jpg