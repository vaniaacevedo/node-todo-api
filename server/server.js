var express= require('express');
var bodyParser= require('body-parser');

var {mongoose}= require('./db/mongoose');
var {Todo}= require('./modules/todo');
var {User}= require('./modules/user');


var app= express();
app.use(bodyParser.json());

app.post('/todos',(req, res) => {
  var todo= new Todo({
    text:req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  },(err) =>{
    res.status(400).send(err);
  });
});

app.listen(3000, () =>{
  console.log('Server started');
});

// var newTodo= new Todo ({
//   text:'cook dinner'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (err) => {
//   console.log('Unable to save todo');
// });


// var firstUser= new User({
//   email:'vaal56@hotmail.com'
// });
//
// firstUser.save().then((doc) => {
//   console.log(JSON.stringify(doc,undefined,2));// in f we want to format it
// },(err) => {
//   console.log('Unable to save User', err);
// });
