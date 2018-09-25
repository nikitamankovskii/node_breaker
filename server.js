var express = require('express');
var app = express();
var sleep = require('sleep')
const port = 8888;

var data = [
  {
    id : 1,
    name : 'name_1'
  },
  {
    id : 2,
    name : 'name_2'
  },
  {
    id : 3,
    name : 'name_3'
  },
  {
    id : 4,
    name : 'name_4'
  },
]
//main page
app.get('/', function(req, res){
  res.send('server is runing');
});
//to see data
app.get('/data', function(req, res){
  res.send(data);
});
//to get spesific data using 'id'
app.get('/data/:id', function(req, res){
  console.log('\n/data/'+req.params.id)
  var data_user= data.find(function (data){
    return data.id === Number(req.params.id)
  })
  res.send(data_user);
});
//to get data_user
app.get('/date', function(req, res){
  res.send(Date());
});
// make server sleep
app.get('/sleep/:seconds', function(req, res){
  var time_to_sleep = req.params.seconds*1000;
  msleep(time_to_sleep)
  res.send('was spleeping - '+time_to_sleep+'ms');
});
//sleep function
function msleep(n) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, n);
}
app.listen(port, () =>{
  console.log('Server runed on '+port+' on '+Date())
});
