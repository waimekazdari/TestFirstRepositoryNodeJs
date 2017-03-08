var express = require('express')
var app = express()

/*app.get('/', function (req,res) {
  res.send('hello world')
});*/
var books = [{
  title: 'book1',
  price :'20$'
},{
  title: 'book2',
  price :'30$'
},{
  title: 'book3',
  price :'40$'
}];

app.get('/books', function(req,res){
  res.json(books)
});
app.get('/book/:id', function(req,res){
  var book = books[req.params.id];
  res.json(book)
});
// with post
app.post('/books',function(req,res){
  books.push(req.body);
  res.json(book);
});

//Edit a book by id
app.put('/book/:id',function (req,res) {
  var book = req.body;
  var bookToEdit = books[req.params.id];
  bookToEdit = book;
  // update logic
  books.push(bookToEdit);
  res.json(bookToEdit);
});

app.delete('/book/:id', function (req,res) {
  books.splice(1,req.params.id);
  res.json(book)
});

app.listen(3000,function(){
  console.log("server started on port 3000");
});
