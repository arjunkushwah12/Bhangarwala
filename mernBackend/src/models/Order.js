const express = require("express");
const mongoose = require("mongoose");

const Order= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true
    },
    mobile:{
        type:Number,
        required:true,
        unique:true
    },
    zonecode:{
        type:Number
    },
    address:{
        type:String,
        required:true
    },
    street:{
        type:String
    },
    city:{
        type:String,
        required:true
    }


})

const GetOrder= new mongoose.model("GetOrder",Order);
module.exports= GetOrder;