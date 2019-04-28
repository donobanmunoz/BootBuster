const express = require("express");
const bodyParser = require("body-parser");
const compression = require('compression');
const database = require('../database/mysql.js');


const app = express();
const path = require('path');

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/../client/dist"));


app.get('/address', function(req, res){
  console.log('i am responseeeeeee'+res)
  database.selectAll((err, data) => {
    if(err){
      console.log('error connecting to the database');
      res.sendStatus(500);
    }else {
      console.log('this is dataaaaa' + data);
      res.status(200).json(data);
    }
  })
})

app.post('/addAddress', function(req, res){
  let addAddress = req.body.address;
  console.log(addAddress);
    if(addAddress){
    database.postAddress(addAddress, (err, results) => {
      console.log('inside database postAddress');
      if(err){
        console.log('error', err );
        console.log('results', results);
        res.sendStatus(500);
      }else{
        console.log('mexico');
        console.log('wtf', JSON.stringify(results))
        res.sendStatus(200)
        //.json(results);
        console.log('hey here we are', results);
      }
    });
  }
});
//middleware

//HTTP Requests go here






// let port = process.env.PORT || 3000;
//
// app.listen(port, () => {
//   console.log(`Listening on Port ${port}`);
// });

module.exports = app;
// const express = require("express");
// const bodyParser = require("body-parser");
// const compression = require('compression');
// const database = require('../database/mysql.js');
//
// const app = express();
// const path = require('path');
//
// app.use(compression());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static(__dirname + "/../client/dist"));
//
//
// app.get('/address', function(req, res){
//   database.selectAll((err, data) => {
//     if(err){
//       console.log('error connecting to the database');
//       res.sendStatus(500);
//     }else {
//       res.status(200).json(data);
//     }
//   })
// })
// //middleware
//
// //HTTP Requests go here
//
// module.exports = app;
