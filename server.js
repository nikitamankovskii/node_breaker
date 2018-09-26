var express = require('express');
var app = express();
var sleep = require('sleep')
const port = 8888;

// let's generate ou data array since it contains predictable objects.
// Software engineers are lazy beast, that's why they are smart, avoid manual tasks as much as possible
var data = generate_dummy_data(50);

//main page
app.get('/', function(req, res){
  res.send('server is running');
});
//to see data
app.get('/data', function(req, res){
  res.send(data);
});
//to get spesific data using 'id'
app.get('/data/:id', function(req, res){
  // this is correct, we could have created a data which is an object (like a dict in python) instead of an array
  // so we wouldn't have to go through the entire array to find our id.
  // but this is correct since most real world example will be about arrays coming from the database.
  let data_user = data.find(function (data){
    // https://stackoverflow.com/questions/4564158/what-is-the-difference-between-parseintstring-and-numberstring-in-javascript
    return data.id === parseInt(req.params.id) // changed here for ParseInt because it's more flexible to find numbers.
  });
  res.send(data_user);
});
//to get data_user
app.get('/date', function(req, res){
  res.send(Date());
});
// make server sleep
app.get('/sleep/:seconds', function(req, res){
  let time_to_sleep = parseInt(req.params.seconds)*1000;
  // no need to redefine msleep since it's inside the "sleep" package you installed
  sleep.msleep(time_to_sleep)
  res.send('was spleeping - '+time_to_sleep+'ms');
});

app.listen(port, () =>{
  console.log('Server run on '+port+' since '+Date())
});

// this generate an array of dummy objects
function generate_dummy_data(max){
  // here we check max is defined and positive.
  // if not we put a default value of 5
  let data = [];
  max = (typeof max === 'undefined' || max <= 0) ? 5 : max;
  for (let i = 0; i < max; i++) {
    data.push({
      id: i,
      name: 'name_'+i
    });
  }
  return data;
}
