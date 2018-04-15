const {ObjectID} = require('mongodb');

const {mongoose}= require('./../server/db/mongoose');
const {Todo}= require('./../server/models/todo');
const {User}= require('./../server/models/user');

// var id= '5ad32efcc6e0af134e6c54b2';
//
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }
//
// Todo.find({
//   _id:id
// }).then((todos) =>{
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id:id
// }).then((todo) =>{
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) =>{
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch((err) => console.log(err));

var id= '5ac0e31a326f0c5fbbb1435b';

User.findById(id).then((user) =>{
  if(!user){
    return console.log('User not found');
  }
   console.log('User found',user);
}).catch((err) => console.log(err));
