var mongoose= require('mongoose');

mongoose.Promise= global.Promise; //built in library to use promises

mongoose.connect('mongodb://localhost:27017/TodoApp');

//creating a mongoose model

// var Todo= mongoose.model('Todo',{
//   text:{
//     type:String,
//     required:true,
//     minlength:1,
//     trim:true
//   },
//   completed:{
//     type:Boolean,
//     default:false
//   },
//   completedAt:{
//     type:Number,
//     default:null
//   }
// });

// var newTodo= new Todo ({
//   text:'cook dinner'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (err) => {
//   console.log('Unable to save todo');
// });

// var secondTodo= new Todo ({
//   text:'going to the cinema',
//   completed:true,
//   completedAt: 123
// });
//
// secondTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc,undefined,2));
// }, (err) => {
//   console.log('Unable to save todo', err);
// });

var User= mongoose.model('User',{
  email:{
    type:String,
    required:true,
    minlength:1,
    trim:true
  }
});

var firstUser= new User({
  email:'vaal56@hotmail.com'
});

firstUser.save().then((doc) => {
  console.log(JSON.stringify(doc,undefined,2));
},(err) => {
  console.log('Unable to save User', err);
});
