const _= require('lodash');
const express= require('express');
const bodyParser= require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose}= require('./db/mongoose');
var {Todo}= require('./models/todo');
var {User}= require('./models/user');


const port= process.env.PORT || 3000;

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

app.get('/todos',(req,res) =>{
  Todo.find().then((todos) =>{
    res.send({todos});
  },(e) =>{
    res.status(400).send(err);
  })
});

app.get('/todos/:id',(req,res) =>{
  var id= req.params.id
  if(!ObjectID.isValid(id)){
     return res.status(404).send();
  }
  Todo.findById(id).then((todo) =>{
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((err) =>{
    res.status(400).send();
  })
});

app.delete('/todos/:id',(req,res) =>{
  var id= req.params.id
  if(!ObjectID.isValid(id)){
     return res.status(404).send();
  }
  Todo.findByIdAndRemove(id).then((todo) =>{
    if(!todo){
      return res.status(404).send();
    }
    res.send(todo);
  }).catch((err) =>{
    res.status(400).send();
  })
});

app.patch('/todos/:id', (req,res) =>{
  var id= req.params.id
  var body= _.pick(req.body, ['text', 'completed']);
  if(!ObjectID.isValid(id)){
     return res.status(404).send();
  }

  if(_.isBoolean(body.completed) && body.completed ){
    body.completedAt= new Date().getTime();
  } else {
    body.completed= false;
    body.completed= null;
  }
  Todo.findByIdAndUpdate(id,{$set:body},{new:true}).then((todo) =>{
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((err) =>{
    res.status(400).send();
  })
});


app.listen(port, () =>{
  console.log(`Server started up at ${port}`);
});

module.exports= {app}
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
