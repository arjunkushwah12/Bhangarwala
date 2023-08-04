const mongoose = require('mongoose');
const { copyFileSync } = require("fs");
// main().catch(err => console.log(err));
   mongoose.connect('mongodb://localhost:27017/Bhangarwala',{
    useNewUrlParser:true

  }).then(()=>{
    console.log(`connection`);
  }).catch((e)=>{
    console.log(`NOconn`);
  });
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enable

