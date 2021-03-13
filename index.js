const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb+srv://student_dba:student_dba@cluster0.vtcph.mongodb.net/StudentDB?retryWrites=true&w=majority';
let port = process.env.PORT || 5000;

const app = express();


// let bodyParser = require('body-parser');
// app.use(
//     bodyParser.urlencoded({
//       extended: false
//     })
//   );
//   app.use(bodyParser.json());
  

mongoose.connect(url, {useNewUrlParser:true});

const con = mongoose.connection;
con.on('open',function(){
    console.log('connected....');
});

app.use(express.json());

const routeto = require('./routers/students');
app.use('/students',routeto);


app.listen(port, function(){
    console.log('Server started....');
});
