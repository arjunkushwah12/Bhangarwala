const express = require("express");
const mongoose = require("mongoose");

const USignup = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:{
        type:String,
        required:true
    },
    zonecode:{
        type:Number
    },
    mobile:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    }

    // create  collection
})
const UserSignup = new mongoose.model("UserSignup",USignup);
module.exports= UserSignup;