var express = require('express')
var app = express()
var body_parser=require('body-parser');
app.get('/', function (req,res) {
  res.send('hello world')
})

// for send an other file , we have to use --dirname to recover our directory path
app.use(body_parser.urlencoded({extended:false}));

  app.get('/emps',function(req,res){
  res.sendFile(__dirname+'/emp.html');
})
app.post(
  '/emp',function (req,res) {
    var empName=req.body.empName;
    console.log(empName);
  }
)

app.listen(3000)
